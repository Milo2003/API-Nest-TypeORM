import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customers.dtos';
import { Customer } from '../../entities/customer.entety';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [];

  findAll() {
    return this.customers;
  }
  findOne(id: number) {
    const Customer = this.customers.find((item) => item.id === id);
    if (!Customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return Customer;
  }
  create(payload: CreateCustomerDto) {
    this.counterId += 1;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }
  delete(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    this.customers.splice(index, 1);
    return { message: `El Customer ${id} se elimino correctamente` };
  }
  update(id: number, payload: UpdateCustomerDto) {
    const find = this.findOne(id);
    if (find) {
      const index = this.customers.findIndex((item) => item.id === id);
      this.customers[index] = {
        ...find,
        ...payload,
      };
      return this.customers[index];
    }
    return null;
  }
}
