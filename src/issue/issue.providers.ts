import { Connection } from 'mongoose';
import { IssueSchema } from './entities/issue.entity';

export const issueProviders = [
  {
    provide: 'ISSUE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Issue', IssueSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
