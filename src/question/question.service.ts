import { Inject, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Model } from 'mongoose';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {

  constructor(
    //eslint-disable-next-line prettier/prettier
     @Inject('QUESTION_MODEL')
     private questionModel: Model<Question>,
    // private azureService: AzureStorage
  ) {}

  create(createQuestionDto: CreateQuestionDto) {
    //return 'This action adds a new question';
    const createdQuestion = new this.questionModel(createQuestionDto);
    return createdQuestion.save();
  }

  findAll() {
    //return `This action returns all question`;
    return this.questionModel.find().exec();
  }

  findByTemplateId(templateId: string) {
    //return `This action returns all question for template #${templateId}`;
    return this.questionModel.find({ templateId }).exec();
  }

  findOne(id: string) {
    //return `This action returns a #${id} question`;
    return this.questionModel.findById(id).exec();
  }

  update(id: string, updateQuestionDto: UpdateQuestionDto) {
    //return `This action updates a #${id} question`;
    return this.questionModel
      .findByIdAndUpdate(id, updateQuestionDto, { new: true });
  }

  remove(id: string) {
    //return `This action removes a #${id} question`;
    return this.questionModel.findByIdAndDelete(id).exec();
  }

  deleteByTemplateId(templateId: string) {
    return this.questionModel.deleteMany({ templateId }).exec();
  }

  async search(search: string) {
    //return `This action returns all question`;
    //console.log('question search:', search);
    const tempQuestions= await this.questionModel.find({
      title: { $regex: search, $options: 'i' },
    }).exec();
    const tempListTemplatesIds = tempQuestions.map((question) => question.templateId);

    //console.log('tempListTemplatesIds:', tempListTemplatesIds);

    return tempListTemplatesIds;
  }

}
