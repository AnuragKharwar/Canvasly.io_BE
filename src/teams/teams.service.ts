import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Team } from './schema/createTeam.schema';
import { Model } from 'mongoose';
import { CreateTeamDto } from 'src/dto/team/createTeam.dto';
import { UpdateTeamDto } from 'src/dto/team/updateTeam.dto';

@Injectable()
export class TeamsService {
  constructor(@InjectModel(Team.name) private teamModel: Model<Team>) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const teamExists = await this.teamModel.findOne({
      name: createTeamDto.teamName,
    });
    if (teamExists) {
      throw new Error('Team already exists');
    }
    const createdTeam = new this.teamModel(createTeamDto);
    return createdTeam.save();
  }

  async findAll() {
    return this.teamModel.find().exec();
  }

  async findOne(id: string) {
    return this.teamModel.findById(id).exec();
  }

  async update(teamId: string, updateTeamDto: UpdateTeamDto) {
    const team = await this.teamModel
      .findByIdAndUpdate(
        { _id: teamId },
        {
          $set: updateTeamDto,
          $push: { files: updateTeamDto.fileId },
        },
        { new: true },
      )
      .populate('files')
      .exec();

    if (!team) {
      throw new NotFoundException('Team not found');
    }

    Object.assign(team, updateTeamDto);
    return team.save();
  }
}
