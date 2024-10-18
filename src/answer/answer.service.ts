import { Inject, Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Model } from 'mongoose';
import { Answer } from './entities/answer.entity';

@Injectable()
export class AnswerService {
  constructor(
    //eslint-disable-next-line
    @Inject('ANSWER_MODEL')
    private answerModel: Model<Answer>,
  ) {}

  create(createAnswerDto: CreateAnswerDto) {
    //return 'This action adds a new answer';
    const createdAnswer = new this.answerModel(createAnswerDto);
    return createdAnswer.save();
  }

  findAll() {
    //return `This action returns all answer`;
    return this.answerModel
      .find()
      .populate(['templateId', 'userId'])
      .sort({ createdAt: -1 })
      .exec();
  }

  findByAuthor(userId: string) {
    //return `This action returns all answer for user #${userId}`;
    return this.answerModel
      .find({ userId })
      .populate(['templateId', 'userId'])
      .sort({ createdAt: -1 })
      .exec();
  }

  findOne(id: string) {
    //return `This action returns a #${id} answer`;
    return this.answerModel.findById(id).exec();
  }

  findByTemplateId(templateId: string) {
    //return `This action returns all answer for template #${templateId}`;
    return this.answerModel.find({ templateId }).sort({ createdAt: -1 }).exec();
  }

  update(id: string, updateAnswerDto: UpdateAnswerDto) {
    //return `This action updates a #${id} answer`;
    return this.answerModel.findByIdAndUpdate(id, updateAnswerDto, {
      new: true,
    });
  }

  remove(id: string) {
    //return `This action removes a #${id} answer`;
    return this.answerModel.findByIdAndDelete(id).exec();
  }

  deleteAll() {
    //return `This action removes all answers`;
    return this.answerModel.deleteMany({}).exec();
    //return { message: 'This action removes all answers' };
  }
}
