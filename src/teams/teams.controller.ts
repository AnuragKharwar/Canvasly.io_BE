import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from 'src/dto/team/createTeam.dto';
import { UpdateTeamDto } from 'src/dto/team/updateTeam.dto';

@Controller('/teams')
export class TeamsController {
  constructor(private TeamsService: TeamsService) {}

  @Post()
  async create(@Body() createTeamDto: CreateTeamDto) {
    return this.TeamsService.create(createTeamDto);
  }

  @Get()
  async findAll() {
    return this.TeamsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return this.TeamsService.findOne(id);
  }

  @Patch(':teamId')
  async update(
    @Param('teamId') teamId: string,
    @Body() updateTeamDto: UpdateTeamDto,
  ) {
    return this.TeamsService.update(teamId, updateTeamDto);
  }
}
