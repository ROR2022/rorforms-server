import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { AzureStorageService } from 'src/azure.service';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class UserService {
  constructor(
    //eslint-disable-next-line prettier/prettier
    @Inject('USER_MODEL')
    private userModel: Model<User>,
    private azureService: AzureStorageService,
    private configService: ConfigService,
  ) {}

  create(createUserDto: CreateUserDto) {
    //return 'This action adds a new user';
    const forbiden=this.configService.get('FORBIDDEN_ROLE');
    if(createUserDto.roles.includes(forbiden)){
      return {message:'Sorry Forbidden role', error: true};
    }
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  findAll() {
    //return `This action returns all user`;
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    //return `This action returns a #${id} user`;
    return this.userModel.findById(id).exec();
  }

  findOneByEmail(email: string) {
    //return `This action returns a #${email} user`;
    return this.userModel.findOne({email: email}).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    //return `This action updates a #${id} user`;
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    //Rootuser can't be deleted
    const isRootUser = await this.userModel.findById(id);
    const {roles}=isRootUser;
    const forbiden=this.configService.get('FORBIDDEN_ROLE');
    const rootId=this.configService.get('ROOT_ID');
    if(roles.includes(forbiden||'root' ) || id===rootId){
      return {message:'Root user can not be deleted', error: true};
    }

    return this.userModel.findByIdAndDelete(id).exec();
  }

  uploadImage(file: Express.Multer.File) {
    return this.azureService.uploadImage(file);
  }

  async assignRoles(id: string, roles: string[]) {
    const forbiden=this.configService.get('FORBIDDEN_ROLE');
    if(roles.includes(forbiden)){
      return {message:'Sorry Forbidden role', error: true};
    }
    return this.userModel
      .findByIdAndUpdate(id, { roles }, { new: true })
      .exec();
  }

  async changeStatus(id: string, status: string) {
    const forbidenId=this.configService.get('ROOT_ID');
    if(id===forbidenId){
      return {message:'Forbidden user can not be changed', error: true};
    }
    return this.userModel
      .findByIdAndUpdate(id, { status }, { new: true })
      .exec();
  }
}
