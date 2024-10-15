import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { databaseProviders } from 'src/database/database.providers';
import { AzureStorageService } from 'src/azure.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    ...userProviders,
    ...databaseProviders,
    AzureStorageService,
    ConfigService,
  ],
  exports: [UserService],
})
export class UserModule {}
