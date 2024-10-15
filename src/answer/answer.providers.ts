import { Connection } from 'mongoose';
import { AnswerSchema } from './entities/answer.entity';

export const answerProviders = [
  {
    provide: 'ANSWER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Answer', AnswerSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
