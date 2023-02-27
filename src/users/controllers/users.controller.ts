import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Put,
} from '@nestjs/common';

import { userService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';

@Controller('users')
export class UsersController {
  constructor(private user: userService) {}

  @Get()
  get() {
    return this.user.findAll();
  }
  @Get('/tasks')
  getTasks() {
    return this.user.getTasks();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.user.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.user.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateUserDto) {
    return this.user.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.user.delete(id);
  }
}
