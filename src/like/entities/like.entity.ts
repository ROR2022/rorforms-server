import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, mongo } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export type LikeDocument = HydratedDocument<Like>;

@Schema({ timestamps: true })
export class Like {
  @Prop({ required: true, type: mongo.ObjectId, ref: 'Template' })
  templateId: string;

  @Prop({ required: true, type: mongo.ObjectId, ref: 'User' })
  userId: string;

  @Prop()
  like: boolean;

  @Prop()
  type: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const LikeSchema =
  SchemaFactory.createForClass(Like).plugin(mongoosePaginate);

LikeSchema.pre('save', function (next) {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  const localDate = new Date(now.getTime() - timezoneOffset);
  this.createdAt = localDate;
  this.updatedAt = localDate;
  next();
});
