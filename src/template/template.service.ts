import { Inject, Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { Model } from 'mongoose';
import { Template } from './entities/template.entity';
import { QuestionService } from 'src/question/question.service';

export interface IOwner {
  key: string;
  label: string;
}

export interface IFilter {
  category: IOwner;
  owner: IOwner;
  search: string;
  userId: string;
  isForms?: boolean;
}

export const categories = [
  { key: 'cat1', label: 'Personal' },
  { key: 'cat2', label: 'Work' },
  { key: 'cat3', label: 'Education' },
];

export const owners = [
  { key: 'owner1', label: 'I am the author' },
  { key: 'owner2', label: 'I am not the author' },
  { key: 'owner3', label: 'All' },
];

@Injectable()
export class TemplateService {
  constructor(
    //eslint-disable-next-line prettier/prettier
    @Inject('TEMPLATE_MODEL')
    private templateModel: Model<Template>,
    private readonly questionService: QuestionService,
  ) {}

  create(createTemplateDto: CreateTemplateDto) {
    //return 'This action adds a new template';
    const createdTemplate = new this.templateModel(createTemplateDto);
    return createdTemplate.save();
  }

  async copyTemplate(id: string, userId: string, newForm?: boolean) {
    const dataTemplateOrigin = await this.templateModel.findById(id).exec();
    const { title, imageUrl, description, category, questions, isPublic, usersGuest, isForm } =
      dataTemplateOrigin;
    const newTemplate = new this.templateModel({
      author: userId,
      title,
      imageUrl,
      description,
      category,
      isPublic,
      usersGuest,
      isForm: newForm ? newForm : (isForm || false),
    });
    newTemplate.save();
    const listQuestions = [];
    for (const questionId of questions) {
      const dataQuestion = await this.questionService.findOne(questionId);
      const { title, imageUrl, answer, listAnswers, type, required } =
        dataQuestion;
      const newQuestion = await this.questionService.create({
        templateId: String(newTemplate._id),
        title,
        imageUrl,
        answer,
        listAnswers,
        type,
        required,
      });
      newQuestion.save();
      listQuestions.push(newQuestion);
    }
    const orderQuestions = listQuestions.map((question) => question._id);
    const dataNewTemplate= await this.templateModel.findByIdAndUpdate(newTemplate._id, { questions: orderQuestions }, { new: true });

    return { template: dataNewTemplate, questions: listQuestions };
  }

  findAll() {
    //return `This action returns all template`;
    return this.templateModel.find({isForm:{$nin:[true]}}).exec();
  }

  findAllForms() {
    //return `This action returns all template`;
    return this.templateModel.find({isForm:{$in:[true]}}).exec();
  }

  async search(search: string) {
    //return `This action returns all template`;
    const tempTemplates= await this.templateModel.find({
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ],
    });

    const finalTemplates = [...tempTemplates];
    const tempListTemplatesIdsInQuestions = await this.questionService.search(search);
    const tempTemplatesIds= tempTemplates.map((template) => String(template._id));
    const notRepeatedTemplates = tempListTemplatesIdsInQuestions.filter((templateId) => !tempTemplatesIds.includes(templateId));

    const addTemplates = await this.templateModel.find({ _id: { $in: notRepeatedTemplates } }).exec();

    finalTemplates.push(...addTemplates);
    const result= finalTemplates as Template[];
    const resultFilter = result.filter((template) => template.isForm !== true);
    
    return resultFilter;
  }

  async filter(filterTemplateDto: IFilter) {
    //return `This action returns all template`;
    //return this.templateModel.find(filterTemplateDto).exec();
    let query = {};
    const { isForms } = filterTemplateDto;
    if (isForms===true) {
      query = { ...query, isForm: { $in: [true] } };
    }
    if (filterTemplateDto.owner.key === 'owner1') {
      query = {...query, author: filterTemplateDto.userId };
    }
    if (filterTemplateDto.owner.key === 'owner2') {
      query = {...query, author: { $ne: filterTemplateDto.userId } };
    }
    if (filterTemplateDto.category.key !== '') {
      query = { ...query, category: filterTemplateDto.category.key };
    }
    if (filterTemplateDto.search !== '') {
      query = {
        ...query,
        $or: [
          { title: { $regex: filterTemplateDto.search, $options: 'i' } },
          { description: { $regex: filterTemplateDto.search, $options: 'i' } },
        ],
      };
    }
    query = { ...query, isForm: { $nin: [true] } };
    const resultFilter = await this.templateModel.find(query).exec();
    return [...resultFilter];
  }

  findOne(id: string) {
    //return `This action returns a #${id} template`;
    return this.templateModel.findById(id).exec();
  }

  update(id: string, updateTemplateDto: UpdateTemplateDto) {
    //return `This action updates a #${id} template`;
    return this.templateModel.findByIdAndUpdate(id, updateTemplateDto, {
      new: true,
    });
  }

  updateOrderQuestions(id: string, listQuestions: string[]) {
    return this.templateModel.findByIdAndUpdate(
      id,
      { questions: [...listQuestions] },
      { new: true },
    );
  }

  remove(id: string) {
    //return `This action removes a #${id} template`;
    return this.templateModel.findByIdAndDelete(id).exec();
  }
}
