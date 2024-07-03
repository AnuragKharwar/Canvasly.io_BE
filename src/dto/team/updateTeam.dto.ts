import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateTeamDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  teamName: string;

  @IsOptional()
  @IsMongoId({ each: true })
  fileId: Types.ObjectId[];

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  createdBy: string;
}
