import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { MailerModule } from './mailer/mailer.module';
import { AzureStorageService } from './azure.service';
import { WinstonModule } from 'nest-winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import * as winston from 'winston';
import { databaseProviders } from './database/database.providers';
import { WebSocketAppGateway } from './websocket.gateway';
import { VerificationModule } from './verification/verification.module';
import { TemplateModule } from './template/template.module';
import { QuestionModule } from './question/question.module';
import { FormModule } from './form/form.module';
import { AnswerModule } from './answer/answer.module';
import { LikeModule } from './like/like.module';
import { ComentModule } from './coment/coment.module';
import { SalesforceModule } from './salesforce/salesforce.module';
import { JsForceModule } from '@ntegral/nestjs-force';
import { IssueModule } from './issue/issue.module';

@Module({
  imports: [
    // Import the ConfigModule
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    JsForceModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        username: cfg.get('SF_USERNAME'),
        password: cfg.get('SF_PASSWORD'),
        security_token: cfg.get('SF_SECURITY_TOKEN'),
        apiVersion: 'v62.0',
        options: {
          loginUrl: cfg.get('SF_LOGIN_URL'),
        },
      }),
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    JwtModule.register({
      global: true,
      secret: new ConfigService().get('JWT_SECRET'),
      signOptions: {
        expiresIn: new ConfigService().get('JWT_EXPIRATION_TIME'),
      },
    }),
    WinstonModule.forRoot({
      transports: [
        new DailyRotateFile({
          dirname: 'logs',
          filename: 'application-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
        }),
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.simple(),
          ),
        }),
      ],
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),
    AuthModule,
    UserModule,
    DatabaseModule,
    MailerModule,
    VerificationModule,
    TemplateModule,
    QuestionModule,
    FormModule,
    AnswerModule,
    LikeModule,
    ComentModule,
    SalesforceModule,
    IssueModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AzureStorageService,
    JwtService,
    ...databaseProviders,
    WebSocketAppGateway,
  ],
  exports: [AzureStorageService, JwtService],
})
export class AppModule {}
