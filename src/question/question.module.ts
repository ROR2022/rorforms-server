import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { databaseProviders } from 'src/database/database.providers';
import { questionProviders } from './question.providers';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService, ...databaseProviders, ...questionProviders],
  exports: [QuestionService],
})
export class QuestionModule {}
