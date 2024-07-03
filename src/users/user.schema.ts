import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ type: [Types.ObjectId], ref: 'Team' })
  teams: Types.ObjectId[];

  @Prop({})
  createdAt: Date;

  @Prop({})
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
