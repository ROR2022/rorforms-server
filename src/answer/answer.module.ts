import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { databaseProviders } from 'src/database/database.providers';
//import { templateProviders } from 'src/template/template.providers';
import { answerProviders } from './answer.providers';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [AnswerController],
  providers: [
    AnswerService,
    ...databaseProviders,
    ...answerProviders,
    ConfigService,
  ],
})
export class AnswerModule {}
