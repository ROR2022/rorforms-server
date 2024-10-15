import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { MailerService } from 'src/mailer/mailer.service';
import { VerificationService } from 'src/verification/verification.service';
import { userProviders } from 'src/user/user.providers';
import { databaseProviders } from 'src/database/database.providers';
import { verificationProviders } from 'src/verification/verification.providers';
import { AzureStorageService } from 'src/azure.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    MailerService,
    VerificationService,
    ...userProviders,
    ...databaseProviders,
    ...verificationProviders,
    AzureStorageService,
  ],
})
export class AuthModule {}
