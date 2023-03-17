import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsController } from './controllers/products.controller';
import { BrandController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { BrandService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';
import { Product } from './entities/product.entety';
import { Brand } from './entities/brand.entety';
import { Category } from './entities/category.entety';
@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand, Category], 'postgres')],
  controllers: [ProductsController, CategoriesController, BrandController],
  providers: [ProductsService, BrandService, CategoriesService],
  exports: [ProductsService, TypeOrmModule],
})
export class ProductsModule {}
