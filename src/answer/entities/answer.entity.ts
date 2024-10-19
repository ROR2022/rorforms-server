import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, mongo } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { IAnswer } from '../dto/create-answer.dto';

export type AnswerDocument = HydratedDocument<Answer>;

@Schema({ timestamps: true })
export class Answer {
  @Prop({ required: true, type: mongo.ObjectId, ref: 'Template' })
  templateId: string;

  @Prop({ type: mongo.ObjectId, ref: 'Template' })
  fatherId: string;

  @Prop()
  answers: Array<IAnswer>;

  @Prop()
  userEmail: string;

  @Prop()
  userName: string;

  @Prop({ type: mongo.ObjectId, ref: 'User' })
  userId: string;

  @Prop()
  isValid: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const AnswerSchema =
  SchemaFactory.createForClass(Answer).plugin(mongoosePaginate);

AnswerSchema.pre('save', function (next) {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  const localDate = new Date(now.getTime() - timezoneOffset);
  this.createdAt = localDate;
  this.updatedAt = localDate;
  next();
});
