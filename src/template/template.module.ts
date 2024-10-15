import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { databaseProviders } from 'src/database/database.providers';
import { templateProviders } from './template.providers';
import { questionProviders } from 'src/question/question.providers';
import { QuestionService } from 'src/question/question.service';

@Module({
  controllers: [TemplateController],
  providers: [
    TemplateService,
    ...databaseProviders,
    ...templateProviders,
    ...questionProviders,
    QuestionService,
  ],
})
export class TemplateModule {}
