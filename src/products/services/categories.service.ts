import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dtos';
import { Category } from '../entities/category.entety';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category, 'postgres')
    private categoryRepo: Repository<Category>,
  ) {}

  findAll() {
    return this.categoryRepo.find();
  }
  async findOne(id: number) {
    const category = await this.categoryRepo.findOne({
      where: { id },
      relations: ['products'],
    });
    if (!Category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }
  create(data: CreateCategoryDto) {
    const newCategory = this.categoryRepo.create(data);
    return this.categoryRepo.save(newCategory);
  }
  async delete(id: number) {
    const category = await this.categoryRepo.delete(id);
    if (category.affected === 0) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return { message: `The Category ${id} has been deleted successfully ` };
  }
  async update(id: number, changes: UpdateCategoryDto) {
    const category = await this.categoryRepo.findOneBy({ id });
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    this.categoryRepo.merge(category, changes);
    return this.categoryRepo.save(category);
  }
}
