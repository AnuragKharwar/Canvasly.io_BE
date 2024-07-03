import {
  IsBoolean,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateFileDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fileName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  teamId: string;

  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
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
