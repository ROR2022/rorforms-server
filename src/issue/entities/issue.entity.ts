import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, mongo } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export type IssueDocument = HydratedDocument<Issue>;

@Schema({ timestamps: true })
export class Issue {
  @Prop({ required: true })
  jiraId: string;

  @Prop({ required: true })
  jiraKey: string;

  @Prop({ required: true })
  jiraUrl: string;

  @Prop({ required: true })
  summary: string;

  @Prop({ required: true })
  priority: string;

  @Prop({ required: true })
  link: string;

  @Prop({ required: true })
  userEmail: string;

  @Prop({ required: true, type: mongo.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ required: true })
  template: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const IssueSchema =
  SchemaFactory.createForClass(Issue).plugin(mongoosePaginate);

IssueSchema.pre('save', function (next) {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  const localDate = new Date(now.getTime() - timezoneOffset);
  this.createdAt = localDate;
  this.updatedAt = localDate;
  next();
});
