import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  CreateProductDto,
  FilterProductDto,
  UpdateProductDto,
} from '../dtos/products.dtos';
import { Product } from '../entities/product.entety';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product, 'postgres')
    private productRepo: Repository<Product>,
  ) {}
  findAll(params?: FilterProductDto) {
    if (params) {
      // const filters: FilterQuery<Product> = {};
      // const { limit, offset } = params;
      // const { minPrice, maxPrice } = params;
      // if (minPrice && maxPrice) {
      //   filters.price = { $gte: minPrice, $lte: maxPrice };
      // }
      return this.productRepo.find();
      // return this.productRepo.find(filters).skip(offset).limit(limit).exec();
    }
    return this.productRepo.find();
  }
  async findOne(id: number) {
    const product = await this.productRepo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  create(data: CreateProductDto) {
    // const product = new Product();
    // product.name = data.name;
    // product.description = data.description;
    // product.price = data.price;
    // product.stock = data.stock;
    // product.image = data.image;
    // return this.productRepo.save(product);
    const product = this.productRepo.create(data);
    return this.productRepo.save(product);
  }
  async update(id: number, changes: UpdateProductDto) {
    const product = await this.productRepo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.productRepo.merge(product, changes);
    return this.productRepo.save(product);
  }
  async delete(id: number) {
    const deleteProduct = await this.productRepo.delete(id);
    if (deleteProduct.affected === 0) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return { message: `The product ${id} has been deleted` };
  }
}
