import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { Product } from '../../entities/product.entety';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  create(payload: CreateProductDto) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return { message: `El producto ${id} se elimino correctamente` };
  }
  update(id: number, payload: UpdateProductDto) {
    const find = this.findOne(id);
    if (find) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...find,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
}
