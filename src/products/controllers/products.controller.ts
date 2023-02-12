import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { ProductsService } from '../services/products.service';
// import { ParseIntPipe } from '../../common/parse-int.pipe';
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
  getProduct(@Param('id', MongoIdPipe) id: string) {
    // return `product ${params.id}`;
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'Create',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.delete(id);
  }
}
