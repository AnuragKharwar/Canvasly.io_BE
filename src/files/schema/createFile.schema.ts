import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FileDocument = HydratedDocument<File>;

@Schema({ timestamps: true })
export class File {
  @Prop({ required: true, unique: true })
  fileName: string;

  @Prop({ required: true })
  teamId: string;

  @Prop()
  createdBy: string;

  @Prop()
  archived: boolean;

  @Prop()
  document: string;

  @Prop()
  whiteboard: string;
}

export const FileSchema = SchemaFactory.createForClass(File);
