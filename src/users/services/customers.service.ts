import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';
import { Customer } from '../entities/customer.entety';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer, 'postgres')
    private customerRepo: Repository<Customer>,
  ) {}
  findAll() {
    return this.customerRepo.find();
  }
  async findOne(id: number) {
    const customer = await this.customerRepo.findOneBy({ id });
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }
  create(data: CreateCustomerDto) {
    const newCustomer = this.customerRepo.create(data);
    return this.customerRepo.save(newCustomer);
  }
  async delete(id: number) {
    const customer = await this.customerRepo.delete(id);
    if (customer.affected === 0) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return { message: `El Customer ${id} se elimino correctamente` };
  }
  async update(id: number, changes: UpdateCustomerDto) {
    const customer = await this.customerRepo.findOneBy({ id });
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    this.customerRepo.merge(customer, changes);
    return this.customerRepo.save(customer);
  }
}
