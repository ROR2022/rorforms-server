import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ConfigService } from '@nestjs/config';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { FileInterceptor } from '@nestjs/platform-express';

const myRoleAdmin = new ConfigService().get('ROLE_ADMIN') ?? 'admin';

@Controller('user')
export class UserController {
  roleAdmin: string = '';

  constructor(
    //eslint-disable-next-line
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {
    this.roleAdmin = this.configService.get('ROLE_ADMIN') ?? 'admin';
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  @Post('uploadImage')
  uploadImage(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /\/(jpg|jpeg|png)$/,
        })
        .build({
          exceptionFactory: (errors) =>
            new HttpException(errors, HttpStatus.BAD_REQUEST),
          fileIsRequired: false, // this means that the file is optional
        }),
    )
    file?: Express.Multer.File,
  ) {
    if (!file) {
      throw new HttpException('File is required', HttpStatus.BAD_REQUEST);
    }
    return this.userService.uploadImage(file);
  }

  //@Roles(new ConfigService().get('ROLE_ADMIN'))
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    //console.log('req.user: ', req.user);
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get('findByEmail/:email')
  findByEmail(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles([myRoleAdmin])
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles([myRoleAdmin])
  @Patch('assignRoles/:id')
  assignRoles(@Param('id') id: string, @Body() body: any) {
    const { roles } = body;
    return this.userService.assignRoles(id, roles);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles([myRoleAdmin])
  @Patch('changeStatus/:id')
  changeStatus(@Param('id') id: string, @Body() body: any) {
    const { status } = body;
    return this.userService.changeStatus(id, status);
  }
}
