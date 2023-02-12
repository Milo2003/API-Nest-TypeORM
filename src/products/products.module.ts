import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsController } from './controllers/products.controller';
import { BrandController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { BrandService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';
import { Product, ProductSchema } from './entities/product.entety';
import { Brand, BrandSchema } from './entities/brand.entety';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
      {
        name: Brand.name,
        schema: BrandSchema,
      },
    ]),
  ],
  controllers: [ProductsController, CategoriesController, BrandController],
  providers: [ProductsService, BrandService, CategoriesService],
  exports: [ProductsService],
})
export class ProductsModule {}
