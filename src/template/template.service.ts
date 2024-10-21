import { Inject, Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { PaginateModel } from 'mongoose';
import { Template } from './entities/template.entity';
import { QuestionService } from 'src/question/question.service';
import { AnswerService } from 'src/answer/answer.service';
import { LikeService } from 'src/like/like.service';
import { ComentService } from 'src/coment/coment.service';

export interface IOwner {
  key: string;
  label: string;
}

export interface IFilter {
  top: IOwner;
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

export const topFive = [
  { key: 'top1', label: 'More Filled Forms' },
  { key: 'top2', label: 'More Likes' },
  { key: 'top3', label: 'More Comments' },
];

@Injectable()
export class TemplateService {
  constructor(
    //eslint-disable-next-line prettier/prettier
    @Inject('TEMPLATE_MODEL')
    private templateModel: PaginateModel<Template>,
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
    private readonly likeService: LikeService,
    private readonly comentService: ComentService,
  ) {}

  create(createTemplateDto: CreateTemplateDto) {
    //return 'This action adds a new template';
    const createdTemplate = new this.templateModel(createTemplateDto);
    return createdTemplate.save();
  }

  async copyTemplate(id: string, userId: string, newForm?: boolean) {
    const dataTemplateOrigin = await this.templateModel.findById(id).exec();
    const {
      title,
      imageUrl,
      description,
      category,
      questions,
      isPublic,
      usersGuest,
      isForm,
      tags,
    } = dataTemplateOrigin;
    const newTemplate = new this.templateModel({
      author: userId,
      title,
      imageUrl,
      description,
      category,
      isPublic,
      usersGuest,
      tags,
      fatherId: newForm === true ? id : '',
      isForm: newForm ? newForm : isForm || false,
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
    const dataNewTemplate = await this.templateModel.findByIdAndUpdate(
      newTemplate._id,
      { questions: orderQuestions },
      { new: true },
    );

    return { template: dataNewTemplate, questions: listQuestions };
  }

  findAll(page: number, limit: number) {
    //return `This action returns all template`;
    const options = {
      page: page || 1,
      limit: limit || 10,
      sort: { createdAt: -1 },
      lean: true,
    };
    const query = { isForm: { $nin: [true] } };
    return this.templateModel.paginate(query, options);

    /* return this.templateModel
      .find({ isForm: { $nin: [true] } })
      .sort({ createdAt: -1 })
      .exec(); */
  }

  findAllForms(page: number, limit: number) {
    //return `This action returns all template`;

    const options = {
      page: page || 1,
      limit: limit || 10,
      sort: { createdAt: -1 },
      lean: true,
    };
    const query = { isForm: { $in: [true] } };
    return this.templateModel.paginate(query, options);

    /* return this.templateModel
      .find({ isForm: { $in: [true] } })
      .sort({ createdAt: -1 })
      .exec(); */
  }

  async search(search: string) {
    //return `This action returns all template`;

    const catKey =
      categories.find((cat) =>
        cat.label.toLowerCase().startsWith(search.toLowerCase()),
      )?.key || '';

    const tempTemplates = await this.templateModel.find({
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } },
        { category: { $regex: catKey, $options: 'i' } },
      ],
    });
    console.log('first filter tempTemplates:', tempTemplates);
    const finalTemplates = [...tempTemplates];
    const tempListTemplatesIdsInQuestions =
      await this.questionService.search(search);
    const tempTemplatesIds = tempTemplates.map((template) =>
      String(template._id),
    );
    const notRepeatedTemplates = tempListTemplatesIdsInQuestions.filter(
      (templateId) => !tempTemplatesIds.includes(templateId),
    );

    const addTemplates = await this.templateModel
      .find({ _id: { $in: notRepeatedTemplates } })
      .sort({ createdAt: -1 })
      .exec();

    finalTemplates.push(...addTemplates);
    const result = finalTemplates as Template[];
    const resultFilter = result.filter((template) => template.isForm !== true);

    return resultFilter;
  }

  async searchByTag(tag: string) {
    //return `This action returns all template`;
    const tempTemplates = await this.templateModel
      .find({
        tags: { $regex: tag, $options: 'i' },
      })
      .sort({ createdAt: -1 })
      .exec();

    return tempTemplates;
  }

  async getDistinctTags() {
    const tags = await this.templateModel
      .distinct('tags')
      .sort({ createdAt: -1 })
      .exec();
    return tags;
  }

  async filter(filterTemplateDto: IFilter) {
    //return `This action returns all template`;
    //return this.templateModel.find(filterTemplateDto).exec();
    let query = {};
    const { isForms } = filterTemplateDto;
    //console.log('filterTemplateDto:', filterTemplateDto);
    if (isForms === true) {
      query = { ...query, isForm: { $in: [true] } };
    } else {
      query = { ...query, isForm: { $nin: [true] } };
    }
    if (filterTemplateDto.owner.key === 'owner1') {
      query = { ...query, author: filterTemplateDto.userId };
    }
    if (filterTemplateDto.owner.key === 'owner2') {
      query = { ...query, author: { $ne: filterTemplateDto.userId } };
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
    //query = { ...query, isForm: { $nin: [true] } };
    const resultFilter: any = await this.templateModel
      .find(query)
      .sort({ createdAt: -1 })
      .exec();

    const resultFilterIds = resultFilter.map((template) =>
      String(template._id),
    );
    let finalResultFilter = [...resultFilter];
    if (filterTemplateDto.top.key === 'top1') {
      const listAnswersByListTemplateId =
        await this.answerService.getAnswersByListTemplateId(resultFilterIds);
      //console.log('listAnswersByListTemplateId:', listAnswersByListTemplateId);
      const objTemplateIdAnswers = listAnswersByListTemplateId.reduce(
        (acc, answer) => {
          if (!acc[isForms===true ? answer.templateId : answer.fatherId]) {
            acc[isForms===true ? answer.templateId : answer.fatherId] = 0;
          }
          acc[isForms===true ? answer.templateId : answer.fatherId]++;
          return acc;
        },
        {},
      );
      //get the top 5 with more answers from objTemplateIdAnswers
      const topFiveAnswers = Object.keys(objTemplateIdAnswers)
        .sort((a, b) => objTemplateIdAnswers[b] - objTemplateIdAnswers[a])
        .slice(0, 5);
      //console.log('topFiveAnswers:', topFiveAnswers);
      finalResultFilter = topFiveAnswers.map((templateId) =>
        resultFilter.find((template) => String(template._id) === templateId),
      );
      //console.log('finalResultFilter:', finalResultFilter);
    }

    if (filterTemplateDto.top.key === 'top2') {
      const listLikesByListTemplateId =
        await this.likeService.getLikesByListTemplateId(resultFilterIds);
      const objTemplateIdLikes = listLikesByListTemplateId.reduce(
        (acc, like) => {
          if (!acc[like.templateId]) {
            acc[like.templateId] = 0;
          }
          acc[like.templateId]++;
          return acc;
        },
        {},
      );
      //get the top 5 with more likes from objTemplateIdLikes
      const topFiveLikes = Object.keys(objTemplateIdLikes)
        .sort((a, b) => objTemplateIdLikes[b] - objTemplateIdLikes[a])
        .slice(0, 5);
      finalResultFilter = topFiveLikes.map((templateId) =>
        resultFilter.find((template) => String(template._id) === templateId),
      );
    }

    if (filterTemplateDto.top.key === 'top3') {
      const listCommentsByListTemplateId =
        await this.comentService.getComentsByListTemplateId(resultFilterIds);
      const objTemplateIdComments = listCommentsByListTemplateId.reduce(
        (acc, comment) => {
          if (!acc[comment.templateId]) {
            acc[comment.templateId] = 0;
          }
          acc[comment.templateId]++;
          return acc;
        },
        {},
      );
      //get the top 5 with more comments from objTemplateIdComments
      const topFiveComments = Object.keys(objTemplateIdComments)
        .sort((a, b) => objTemplateIdComments[b] - objTemplateIdComments[a])
        .slice(0, 5);
      finalResultFilter = topFiveComments.map((templateId) =>
        resultFilter.find((template) => String(template._id) === templateId),
      );
    }

    return [...finalResultFilter];
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

  async deleteAllForms() {
    return this.templateModel.deleteMany({ isForm: { $in: [true] } }).exec();
  }
}
