import { Module } from '@nestjs/common';
import { ComentService } from './coment.service';
import { ComentController } from './coment.controller';
import { databaseProviders } from 'src/database/database.providers';
import { comentProviders } from './coment.providers';

@Module({
  controllers: [ComentController],
  providers: [ComentService, ...comentProviders, ...databaseProviders],
})
export class ComentModule {}
