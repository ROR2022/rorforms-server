import { Inject, Injectable } from '@nestjs/common';
import { CreateComentDto } from './dto/create-coment.dto';
import { UpdateComentDto } from './dto/update-coment.dto';
import { Model } from 'mongoose';
import { Coment } from './entities/coment.entity';

@Injectable()
export class ComentService {

  constructor(
    //eslint-disable-next-line prettier/prettier
    @Inject('COMENT_MODEL')
    private comentModel: Model<Coment>,
  ) {}

  create(createComentDto: CreateComentDto) {
    //return 'This action adds a new coment';
    const createdComent = new this.comentModel(createComentDto);
    return createdComent.save();
  }

  findAll() {
    //return `This action returns all coment`;
    return this.comentModel.find().exec();
  }

  findByTemplateId(templateId: string) {
    return this.comentModel.find({templateId: templateId}).exec();
  }

  findOne(id: string) {
    //return `This action returns a #${id} coment`;
    return this.comentModel.findById(id).exec();
  }

  update(id: string, updateComentDto: UpdateComentDto) {
    //return `This action updates a #${id} coment`;
    return this.comentModel.findByIdAndUpdate(id, updateComentDto, {new:true}).exec();
  }

  remove(id: string) {
    //return `This action removes a #${id} coment`;
    return this.comentModel.findByIdAndDelete(id).exec();
  }
}
