import { Module } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { VerificationController } from './verification.controller';
import { verificationProviders } from './verification.providers';
import { databaseProviders } from 'src/database/database.providers';
import { UserService } from 'src/user/user.service';
import { userProviders } from 'src/user/user.providers';
import { MailerService } from 'src/mailer/mailer.service';
import { AzureStorageService } from 'src/azure.service';

@Module({
  controllers: [VerificationController],
  providers: [
    VerificationService,
    ...verificationProviders,
    ...databaseProviders,
    UserService,
    ...userProviders,
    MailerService,
    AzureStorageService,
  ],
})
export class VerificationModule {}
