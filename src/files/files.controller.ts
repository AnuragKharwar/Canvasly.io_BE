import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from 'src/dto/file/createFile.dto';
import { UpdateFileDto } from 'src/dto/file/updateFile.dto';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get()
  async findAll() {
    return this.filesService.findAll();
  }

  @Get(':fileId')
  async findById(@Param('fileId') fileId: string) {
    return this.filesService.findById(fileId);
  }

  @Get('/team/:teamId')
  async findbyteamId(@Param('teamId') teamId: string) {
    return this.filesService.findByTeamId(teamId);
  }

  @Post()
  async create(@Body() createFileDto: CreateFileDto) {
    return this.filesService.create(createFileDto);
  }

  @Patch(':fileId')
  async update(
    @Param('fileId') fileId: string,
    @Body() updateFileDto: UpdateFileDto,
  ) {
    return this.filesService.update(fileId, updateFileDto);
  }
}
