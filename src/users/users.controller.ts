// src/users/users.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/users/createUser.dto';
import { UpdateUserDto } from 'src/dto/users/updateUser.dto';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/:email')
  async findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Patch('/:email')
  async update(
    @Param('email') email: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(email, updateUserDto);
  }
}
