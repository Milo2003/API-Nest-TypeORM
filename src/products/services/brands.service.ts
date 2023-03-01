import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dtos';
import { Brand } from '../entities/brand.entety';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand, 'postgres') private brandRepo: Repository<Brand>,
  ) {}

  findAll() {
    return this.brandRepo.find();
  }
  async findOne(id: number) {
    const product = await this.brandRepo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  create(data: CreateBrandDto) {
    const newBrand = this.brandRepo.create(data);
    return this.brandRepo.save(newBrand);
  }
  async delete(id: number) {
    const brand = await this.brandRepo.delete(id);
    if (brand.affected === 0) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return { message: `The brand ${id} has been deleted successfuly` };
  }
  async update(id: number, changes: UpdateBrandDto) {
    const brand = await this.brandRepo.findOneBy({ id });
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.brandRepo.merge(brand, changes);
    return this.brandRepo.save(brand);
  }
}
