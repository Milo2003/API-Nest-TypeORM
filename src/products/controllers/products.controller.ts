import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { ProductsService } from '../services/products.service';
import {
  CreateProductDto,
  UpdateProductDto,
  FilterProductDto,
} from '../dtos/products.dtos';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('filter')
  getProductFilter() {
    return `products filter`;
  }
  @Get()
  @ApiOperation({ summary: 'List of products' })
  get(
    @Query() params: FilterProductDto,
    // @Query('offset') offset = 0,
    // @Query('brand') brand: string,
  ) {
    // return {
    //   message: `product limit=> ${limit} offset=> ${offset} brand ${brand}`;
    // };
    return this.productsService.findAll(params);
  }
  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
