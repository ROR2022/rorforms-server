import { Module } from '@nestjs/common';
import { SalesforceController } from './salesforce.controller';
import { SalesforceService } from './salesforce.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [SalesforceController],
  providers: [SalesforceService, ConfigService],
})
export class SalesforceModule {}
