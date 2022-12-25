import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dtos';
import { User } from '../../entities/user.entety';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [];

  findAll() {
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }
  create(payload: CreateUserDto) {
    this.counterId += 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }
  delete(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.users.splice(index, 1);
    return { message: `El Usero ${id} se elimino correctamente` };
  }
  update(id: number, payload: UpdateUserDto) {
    const find = this.findOne(id);
    if (find) {
      const index = this.users.findIndex((item) => item.id === id);
      this.users[index] = {
        ...find,
        ...payload,
      };
      return this.users[index];
    }
    return null;
  }
}
