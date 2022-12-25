import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';

import { CategoriesService } from 'src/services/categories/categories.service';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../../dtos/categories.dtos';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${id} and category ${productId}`;
  }
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  get() {
    return this.categoriesService.findAll();
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCategoryDto) {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateCategoryDto) {
    return this.categoriesService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoriesService.delete(+id);
  }
}
