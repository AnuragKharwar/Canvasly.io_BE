// src/teams/schemas/team.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

export type teamDocument = HydratedDocument<Team>;

@Schema()
export class Team {
  @Prop({ required: true })
  teamName: string;

  @Prop({ type: [Types.ObjectId], ref: 'File' })
  files: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  createdBy: String;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
