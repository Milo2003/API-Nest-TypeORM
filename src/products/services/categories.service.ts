import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dtos';
import { Category } from '../entities/category.entety';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [];

  findAll() {
    return this.categories;
  }
  findOne(id: number) {
    const Category = this.categories.find((item) => item.id === id);
    if (!Category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return Category;
  }
  create(payload: CreateCategoryDto) {
    this.counterId += 1;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }
  delete(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    this.categories.splice(index, 1);
    return { message: `The Category ${id} has been deleted successfully ` };
  }
  update(id: number, payload: UpdateCategoryDto) {
    const find = this.findOne(id);
    if (find) {
      const index = this.categories.findIndex((item) => item.id === id);
      this.categories[index] = {
        ...find,
        ...payload,
      };
      return this.categories[index];
    }
    return null;
  }
}
