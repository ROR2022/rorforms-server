import { Inject, Injectable } from '@nestjs/common';
import { CreateVerificationDto } from './dto/create-verification.dto';
//import { UpdateVerificationDto } from './dto/update-verification.dto';
import { Model } from 'mongoose';
import { Verification } from './entities/verification.entity';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {
  sendReactiveMailer,
  sendRecoveryPasswordMailer,
} from 'src/mailer/lib/libMailer';
import { MailerService } from 'src/mailer/mailer.service';
import { sendConfimCodeMailer } from 'src/mailer/lib/libMailer';
//import { User } from 'src/user/entities/user.entity';

@Injectable()
export class VerificationService {
  constructor(
    //eslint-disable-next-line prettier/prettier
    @Inject('VERIFICATION_MODEL')
    private verificationModel: Model<Verification>,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    private jwtService: JwtService,
    private mailerService: MailerService,
  ) {
    this.jwtService = new JwtService({
      secret: this.configService.get('JWT_SECRET'),
      signOptions: { expiresIn: this.configService.get('JWT_EXPIRES_IN') },
    });
  }

  async create(createVerificationDto: CreateVerificationDto) {
    const verification = new this.verificationModel(createVerificationDto);
    const newVerification = await verification.save();

    if (newVerification) {
      return {
        message: 'Verification created',
        success: true,
        verification: newVerification._id,
      };
    } else {
      return { message: 'Verification not created', success: false };
    }
  }

  async createRecovery(
    createVerificationDto: CreateVerificationDto,
  ): Promise<any> {
    const verification = new this.verificationModel(createVerificationDto);
    const newVerification = await verification.save();
    sendRecoveryPasswordMailer(
      createVerificationDto.email,
      +createVerificationDto.code,
    );
    if (newVerification) {
      return {
        message: 'Verification created',
        success: true,
        verification: newVerification._id,
      };
    } else {
      return { message: 'Verification not created', success: false };
    }
  }

  async createReactive(
    createVerificationDto: CreateVerificationDto,
  ): Promise<any> {
    const verification = new this.verificationModel(createVerificationDto);
    const newVerification = await verification.save();
    sendReactiveMailer(
      createVerificationDto.email,
      +createVerificationDto.code,
    );
    if (newVerification) {
      return {
        message: 'Verification created',
        success: true,
        verification: newVerification._id,
      };
    } else {
      return { message: 'Verification not created', success: false };
    }
  }

  async confirm(dataConfirm: any): Promise<any> {
    const { verification, code } = dataConfirm;

    const dataVerification: any = await this.verificationModel
      .findById(verification)
      .exec();

    if (!dataVerification) {
      return { message: 'Verification not found', success: false };
    }
    if (dataVerification.code !== code) {
      return { message: 'Confirm code is incorrect', success: false };
    }

    if (dataVerification?.userId) {
      const updatedUser: any = await this.userService.update(
        dataVerification?.userId,
        { status: 'active', online: true },
      );

      //eslint-disable-next-line
      const { password, ...restDataUser } = updatedUser._doc;
      const { email, name, roles, _id } = restDataUser;
      const payload = { email: email, username: name, roles: roles, id: _id };
      const access_token = await this.jwtService.signAsync(payload);
      const dataUser = { ...restDataUser, access_token };
      return { message: 'Verification confirmed', success: true, dataUser };
    } else {
      //this means it is for recovery password
      return {
        message: 'Email Verification confirmed',
        success: true,
        dataUser: { email: dataVerification.email },
      };
    }
  }

  async findOne(id: string) {
    return this.verificationModel.findById(id).exec();
  }

  async resend(id: string) {
    const dataVerification: Verification = await this.verificationModel
      .findById(id)
      .exec();
    if (!dataVerification) {
      return { message: 'Verification not found', success: false };
    }
    const { email, code } = dataVerification;
    if (!email || !code) {
      return {
        message: 'Email or code not found in Verification',
        success: false,
      };
    }
    sendConfimCodeMailer(email, +code);

    return { message: 'Email sent', success: true };
  }

  async remove() {
    return this.verificationModel.deleteMany({}).exec();
  }
}
