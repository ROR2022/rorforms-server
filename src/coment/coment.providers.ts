import { Connection } from 'mongoose';
import { ComentSchema } from './entities/coment.entity';

export const comentProviders = [
  {
    provide: 'COMENT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Coment', ComentSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
