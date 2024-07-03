import {
  IsBoolean,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateFileDto {
  @IsString()
  @IsNotEmpty()
  fileName: string;

  @IsString()
  @IsNotEmpty()
  teamId: string;

  @IsString()
  @IsMongoId()
  @IsNotEmpty()
  createdBy: string;

  @IsBoolean()
  @IsNotEmpty()
  archived: boolean;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  document: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  whiteboard: string;
}
