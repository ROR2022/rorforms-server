import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { SignInDto } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { MailerService } from 'src/mailer/mailer.service';
import { VerificationService } from 'src/verification/verification.service';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { AzureStorageService } from 'src/azure.service';

@Injectable()
export class AuthService {
  constructor(
    //eslint-disable-next-line prettier/prettier
    private jwtService: JwtService,
    private userService: UserService,
    private mailerService: MailerService,
    private verificationService: VerificationService,
    private configService: ConfigService,
    private azureService: AzureStorageService,
  ) {
    this.jwtService = new JwtService({
      secret: this.configService.get('JWT_SECRET'),
      signOptions: { expiresIn: this.configService.get('JWT_EXPIRES_IN') },
    });
  }

  async login(dataLoginUser: SignInDto) {
    const { email, password: pass } = dataLoginUser;
    const user: any = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (user.status !== 'active') {
      throw new UnauthorizedException('User not active');
    }
    const { password: passUser } = user;
    const isMatchPassword = await bcrypt.compare(pass, passUser);
    if (!isMatchPassword) {
      throw new UnauthorizedException('Invalid password');
    }

    //update last login
    const myDate = new Date();
    myDate.setHours(myDate.getHours() - 6);
    await this.userService.update(user._id, { lastLogin: myDate, online: true });

    const payload = {
      email: user.email,
      username: user.name,
      roles: user.roles,
      id: user._id,
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...dataUser } = user;
    
    const token = await this.jwtService.signAsync(payload);
    return {
      dataUser:{...dataUser._doc, access_token: token},
    };
  }

  async register(user: CreateUserDto, file?: Express.Multer.File) {
    const forbiddenRole = this.configService.get('FORBIDDEN_ROLE');
    if (user.roles.includes(forbiddenRole)) {
      throw new UnauthorizedException('Forbidden role');
    }
    try {
      let url = '';
      if (file) {
        //upload file
        url = await this.azureService.uploadImage(file);
      }
      user.imageUrl = url;
      user.password = await bcrypt.hash(user.password, 10);
  
      const newUser: any = await this.userService.create(user);
      const dataVerification = await this.mailerService.sendMail(
        newUser.email,
        newUser._id,
      );
      const newVerification: any =
        await this.verificationService.create(dataVerification);
      const dataResponse = {
        verification: newVerification?.verification,
      };
      if (!newVerification) {
        throw new UnauthorizedException('Error creating verification');
      }
      return dataResponse;  
    } catch (error) {
      console.log('Error Creating User :', error);
      throw new UnauthorizedException('Error creating user');
    }
    
  }

  async recovery(dataRecovery: any) {
    const { email, verificationId, myCode, password } = dataRecovery;

    const user: any = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const dataVerification =
      await this.verificationService.findOne(verificationId);
    if (!dataVerification) {
      throw new UnauthorizedException('Verification not found');
    }

    if (String(dataVerification.code) !== String(myCode)) {
      throw new UnauthorizedException('Invalid code');
    }
    //update password
    const newPassword = await bcrypt.hash(password, 10);
    const updatedUser = await this.userService.update(user._id, {
      password: newPassword,
    });
    if (!updatedUser) {
      throw new UnauthorizedException('Error updating password');
    }
    return { message: 'Password updated', success: true };
  }

  async reactive(dataReactive: any) {
    const { email, verificationId, myCode } = dataReactive;
    const user: any = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const dataVerification =
      await this.verificationService.findOne(verificationId);
    if (!dataVerification) {
      throw new UnauthorizedException('Verification not found');
    }

    if (String(dataVerification.code) !== String(myCode)) {
      throw new UnauthorizedException('Invalid code');
    }

    const updatedUser = await this.userService.update(user._id, {
      status: 'active',
    });
    if (!updatedUser) {
      throw new UnauthorizedException('Error updating password');
    }
    return { message: 'Account Reactivated', success: true };
  }
}
