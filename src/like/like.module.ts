import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { likeProviders } from './like.providers';
import { databaseProviders } from 'src/database/database.providers';

@Module({
  controllers: [LikeController],
  providers: [LikeService, ...likeProviders, ...databaseProviders],
  exports: [LikeService],
})
export class LikeModule {}
