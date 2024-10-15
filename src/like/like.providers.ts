import { Connection } from 'mongoose';
import { LikeSchema } from './entities/like.entity';

export const likeProviders = [
  {
    provide: 'LIKE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Like', LikeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
