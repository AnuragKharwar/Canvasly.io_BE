import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from './schema/createFile.schema';
import { CreateFileDto } from 'src/dto/file/createFile.dto';
import { UpdateFileDto } from 'src/dto/file/updateFile.dto';

@Injectable()
export class FilesService {
  constructor(@InjectModel(File.name) private fileModel: Model<File>) {}

  async findAll(): Promise<File[]> {
    return this.fileModel.find().exec();
  }

  async findById(fileId: string): Promise<File> {
    return this.fileModel.findById(fileId).exec();
  }

  async findOne(teamId: string): Promise<File> {
    const file = await this.fileModel.findOne({ teamId }).exec();
    if (!file) {
      return null;
    }
    return file;
  }

  async findByTeamId(teamId: string) {
    return this.fileModel.find({ teamId }).sort({ createdAt: -1 }).exec();
  }

  async create(createFileDto: CreateFileDto): Promise<File> {
    const file = new this.fileModel(createFileDto);
    return file.save();
  }

  async update(fileId: string, updateFileDto: UpdateFileDto): Promise<File> {
    const file = await this.fileModel
      .findByIdAndUpdate({ _id: fileId }, updateFileDto, { new: true })
      .exec();
    if (!file) {
      return null;
    }
    return file;
  }
}
