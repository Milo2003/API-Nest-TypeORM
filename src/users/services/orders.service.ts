import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dtos';
import { Customer } from '../entities/customer.entety';
import { Order } from '../entities/order.entety';
import { User } from '../entities/user.entety';
@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order, 'postgres') private orderRepo: Repository<Order>,
    @InjectRepository(Customer, 'postgres')
    private customerRepo: Repository<Customer>,
    @InjectRepository(User, 'postgres')
    private userRepo: Repository<User>,
  ) {}

  findAll() {
    return this.orderRepo.find({ relations: ['customer'] });
  }
  async findOne(id: number) {
    const order = await this.orderRepo.find({
      where: { id },
      relations: ['products', 'products.product'],
    });
    if (!order) {
      throw new NotFoundException(`order #${id} not found`);
    }
    return order;
  }
  async create(data: CreateOrderDto) {
    const newOrder = this.orderRepo.create(data);
    if (data.customerId) {
      const customer = await this.customerRepo.findOneBy({
        id: data.customerId,
      });
      newOrder.customer = customer;
    }
    return this.orderRepo.save(newOrder);
  }
  async delete(id: number) {
    const order = await this.orderRepo.delete(id);
    if (order.affected === 0) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return { message: `La Orden ${id} se elimino correctamente` };
  }
  async update(id: number, changes: UpdateOrderDto) {
    const order = await this.orderRepo.findOneBy({ id });
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    if (changes.customerId) {
      const customer = await this.customerRepo.findOneBy({
        id: changes.customerId,
      });
      order.customer = customer;
    }
    this.orderRepo.merge(order, changes);
    return this.orderRepo.save(order);
  }
  async ordersByCustomer(userId: number) {
    const user = await this.userRepo.findOne({
      where: { id: userId },
      relations: ['customer'],
    });
    const customerId = user.customer.id;
    return await this.orderRepo.find({
      where: { customer: { id: customerId } },
    });
  }

  // async removeProduct(id: number, productId: number) {
  //   const order = await this.orderRepo.findOneBy({ id });
  //   order.products.pull(productId);
  //   return order.save();
  // }

  //other
  // async addProducts(id: number, productsIds: number[]) {
  //   const order = await this.orderRepo.findById(id);
  //   if (!order) {
  //     throw new NotFoundException(`No se pudo encontrar la orden con id ${id}`);
  //   }
  //   productsIds.forEach((pId) => order.products.addToSet(pId));
  //   return order.save();
  // }
}
