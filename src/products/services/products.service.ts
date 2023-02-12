import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import {
  CreateProductDto,
  FilterProductDto,
  UpdateProductDto,
} from '../dtos/products.dtos';
import { Product } from '../entities/product.entety';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  // private counterId = 1;
  // private productModel: Product[] = [
  //   {
  //     id: 1,
  //     name: 'Product 1',
  //     description: 'bla bla',
  //     price: 122,
  //     image: '',
  //     stock: 12,
  //   },
  // ];

  findAll(params?: FilterProductDto) {
    if (params) {
      const filters: FilterQuery<Product> = {};
      const { limit, offset } = params;
      const { minPrice, maxPrice } = params;
      if (minPrice && maxPrice) {
        filters.price = { $gte: minPrice, $lte: maxPrice };
      }
      return this.productModel
        .find(filters)
        .populate('brand')
        .skip(offset)
        .limit(limit)
        .exec();
    }
    return this.productModel.find().populate('brand').exec();
  }
  async findOne(id: string) {
    const product = await this.productModel
      .findById(id)
      .populate('brand')
      .exec();
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  async delete(id: string) {
    const product = await this.productModel.findByIdAndDelete(id).exec();
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return { message: `product ${product.id} has been deleted` };
  }
  create(data: CreateProductDto) {
    const product = new this.productModel(data);
    return product.save();
  }
  // delete(id: number) {
  //   const index = this.productModel.findIndex((item) => item.id === id);
  //   if (index === -1) {
  //     throw new NotFoundException(`Product #${id} not found`);
  //   }
  //   this.productModel.splice(index, 1);
  //   return { message: `El producto ${id} se elimino correctamente` };
  // }
  update(id: string, changes: UpdateProductDto) {
    const product = this.productModel.findByIdAndUpdate(
      id,
      { $set: changes },
      { new: true },
    );
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
}
