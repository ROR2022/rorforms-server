import { Inject, Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Model } from 'mongoose';
import { Like } from './entities/like.entity';

@Injectable()
export class LikeService {

  constructor(
    //eslint-disable-next-line prettier/prettier
    @Inject('LIKE_MODEL')
    private likeModel: Model<Like>,
  ) {}

  create(createLikeDto: CreateLikeDto) {
    //return 'This action adds a new like';
    const createdLike = new this.likeModel(createLikeDto);
    return createdLike.save();
  }

  findAll() {
    //return `This action returns all like`;
    return this.likeModel.find().exec();
  }

  findByTemplateId(templateId: string) {
    return this.likeModel.find({templateId: templateId}).exec();
  }

  findOne(id: string) {
    //return `This action returns a #${id} like`;
    return this.likeModel.findById(id).exec();
  }

  update(id: string, updateLikeDto: UpdateLikeDto) {
    //return `This action updates a #${id} like`;
    return this.likeModel.findByIdAndUpdate(id, updateLikeDto, {new:true}).exec();
  }

  remove(id: string) {
    //return `This action removes a #${id} like`;
    return this.likeModel.findByIdAndDelete(id).exec();
  }

  getLikesByListTemplateId(listTemplateId: string[]){
    return this.likeModel.find({templateId: {$in: listTemplateId}}).exec();
  }
}
