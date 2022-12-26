import { Module } from '@nestjs/common';

import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { OrdersController } from './controllers/orders.controller';

import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';
import { OrdersService } from './services/orders.service';

@Module({
  controllers: [
    ProductsController,
    CategoriesController,
    BrandsController,
    OrdersController,
  ],
  providers: [ProductsService, BrandsService, CategoriesService, OrdersService],
})
export class ProductsModule {}
