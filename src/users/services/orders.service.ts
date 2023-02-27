import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dtos';
import { Order } from '../entities/order.entety';
@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order, 'postgres') private orderRepo: Repository<Order>,
  ) {}

  findAll() {
    return this.orderRepo.find();
  }
  async findOne(id: number) {
    const order = await this.orderRepo.findOneBy({ id });
    if (!order) {
      throw new NotFoundException(`orders del ${id} not found`);
    }
    return order;
  }
  create(data: CreateOrderDto) {
    const newOrder = this.orderRepo.create(data);
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
    const order = await this.orderRepo.findOneBy({ id })
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    this.orderRepo.merge(order, changes);
    return this.orderRepo.save(order);
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
