import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsString()
  teamName: string;

  @IsOptional()
  @IsMongoId({ each: true })
  files: Types.ObjectId[];

  @IsNotEmpty()
  @IsString()
  createdBy: string;
}
