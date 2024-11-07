import { Module } from '@nestjs/common';
import { IssueService } from './issue.service';
import { IssueController } from './issue.controller';
import { issueProviders } from './issue.providers';
import { databaseProviders } from 'src/database/database.providers';

@Module({
  controllers: [IssueController],
  providers: [IssueService, ...issueProviders, ...databaseProviders],
  exports: [IssueService],
})
export class IssueModule {}
