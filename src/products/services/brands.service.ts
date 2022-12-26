import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dtos';
import { Brand } from '../entities/brand.entety';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [];

  findAll() {
    return this.brands;
  }
  findOne(id: number) {
    const product = this.brands.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  create(payload: CreateBrandDto) {
    this.counterId += 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }
  delete(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.brands.splice(index, 1);
    return { message: `El producto ${id} se elimino correctamente` };
  }
  update(id: number, payload: UpdateBrandDto) {
    const find = this.findOne(id);
    if (find) {
      const index = this.brands.findIndex((item) => item.id === id);
      this.brands[index] = {
        ...find,
        ...payload,
      };
      return this.brands[index];
    }
    return null;
  }
}
