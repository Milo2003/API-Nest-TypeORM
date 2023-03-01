import { Inject, Injectable, NotFoundException } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from 'pg';

import { ProductsService } from '../../products/services/products.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';
import { User } from '../entities/user.entety';

@Injectable()
export class userService {
  constructor(
    @InjectRepository(User, 'postgres') private userRepo: Repository<User>,
    private productsService: ProductsService,
    @Inject('PG') private clientPg: Client,
  ) {}

  findAll() {
    return this.userRepo.find();
  }
  findOne(id: number) {
    const user = this.userRepo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }
  create(data: CreateUserDto) {
    const newUser = this.userRepo.create(data);
    return this.userRepo.save(newUser);
  }
  async delete(id: number) {
    const newUser = await this.userRepo.delete(id);
    if (newUser.affected === 0) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return { message: `User ${id} has been deleted ` };
  }
  async update(id: number, changes: UpdateUserDto) {
    const newUser = await this.userRepo.findOneBy({ id })
    if (!newUser) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.userRepo.merge(newUser, changes);
    return this.userRepo.save(newUser);
  }
  async getOrderByUser(id: number) {
    const user = this.userRepo.findOneBy({ id });
    return {
      date: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }
  getTasks() {
    return new Promise((resolve, reject) => {
      //ejecutamos la consulta a la db como una promesa, esto nos trae las tablas que tenemos en la postgresdb
      this.clientPg.query('SELECT * FROM tasks', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });
  }
}
