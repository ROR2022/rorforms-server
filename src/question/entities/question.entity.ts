import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, mongo } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { ISelectItem } from '../dto/create-question.dto';

export type QuestionDocument = HydratedDocument<Question>;

@Schema({ timestamps: true })
export class Question {
  @Prop({ required: true, type: mongo.ObjectId, ref: 'Template' })
  templateId: string;

  @Prop()
  title: string;

  @Prop()
  imageUrl: string;

  @Prop()
  answer: string;

  @Prop()
  listAnswers: Array<ISelectItem>;

  @Prop()
  type: string;

  @Prop()
  required: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const QuestionSchema =
  SchemaFactory.createForClass(Question).plugin(mongoosePaginate);

QuestionSchema.pre('save', function (next) {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  const localDate = new Date(now.getTime() - timezoneOffset);
  this.createdAt = localDate;
  this.updatedAt = localDate;
  next();
});
