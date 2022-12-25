import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';

import { UsersService } from 'src/services/users/users.service';
import { CreateUserDto, UpdateUserDto } from '../../dtos/users.dtos';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  get() {
    return this.usersService.findAll();
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this.usersService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
