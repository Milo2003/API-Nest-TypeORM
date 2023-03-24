import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from 'pg';
import * as bcrypt from 'bcrypt';

import { ProductsService } from '../../products/services/products.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';
import { User } from '../entities/user.entety';
import { CustomersService } from './customers.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User, 'postgres') private userRepo: Repository<User>,
    private productsService: ProductsService,
    private customerService: CustomersService,
    @Inject('PG') private clientPg: Client,
  ) {}

  findAll() {
    return this.userRepo.find({
      relations: ['customer'],
    });
  }
  findOne(id: number) {
    const user = this.userRepo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }
  async create(data: CreateUserDto) {
    const newUser = this.userRepo.create(data);
    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;
    if (data.customerId) {
      const customer = await this.customerService.findOne(data.customerId);
      newUser.customer = customer;
    }
    return this.userRepo.save(newUser);
  }
  async findByEmail(email: string) {
    const user = this.userRepo.findOne({ where: { email } });
    return user;
  }
  async delete(id: number) {
    const newUser = await this.userRepo.delete(id);
    if (newUser.affected === 0) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return { message: `User ${id} has been deleted ` };
  }
  async update(id: number, changes: UpdateUserDto) {
    const newUser = await this.userRepo.findOneBy({ id });
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
