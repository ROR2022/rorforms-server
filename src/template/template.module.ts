import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { databaseProviders } from 'src/database/database.providers';
import { templateProviders } from './template.providers';
import { questionProviders } from 'src/question/question.providers';
import { QuestionService } from 'src/question/question.service';
import { likeProviders } from 'src/like/like.providers';
import { comentProviders } from 'src/coment/coment.providers';
import { LikeService } from 'src/like/like.service';
import { ComentService } from 'src/coment/coment.service';
import { answerProviders } from 'src/answer/answer.providers';
import { AnswerService } from 'src/answer/answer.service';

@Module({
  controllers: [TemplateController],
  providers: [
    TemplateService,
    ...databaseProviders,
    ...templateProviders,
    ...questionProviders,
    ...likeProviders,
    ...comentProviders,
    ...answerProviders,
    AnswerService,
    LikeService,
    ComentService,
    QuestionService,
  ],
})
export class TemplateModule {}
