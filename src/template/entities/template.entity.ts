import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, mongo } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export type TemplateDocument = HydratedDocument<Template>;

@Schema({ timestamps: true })
export class Template {
  @Prop({ required: true, type: mongo.ObjectId, ref: 'User' })
  author: string;

  @Prop()
  title: string;

  @Prop()
  imageUrl: string;

  @Prop()
  description: string;

  @Prop()
  category: string;

  @Prop({ type: [mongo.ObjectId], ref: 'Question' })
  questions: string[];

  @Prop({ type: [String] })
  tags: string[];

  @Prop()
  isForm: boolean;

  @Prop()
  isPublic: boolean;

  @Prop({ type: [mongo.ObjectId], ref: 'User' })
  usersGuest: string[];

  @Prop({ type: mongo.ObjectId, ref: 'Template' })
  fatherId: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const TemplateSchema =
  SchemaFactory.createForClass(Template).plugin(mongoosePaginate);

TemplateSchema.pre('save', function (next) {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  const localDate = new Date(now.getTime() - timezoneOffset);
  this.createdAt = localDate;
  this.updatedAt = localDate;
  next();
});
