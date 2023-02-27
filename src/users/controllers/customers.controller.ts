import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Put,
} from '@nestjs/common';

import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  get() {
    return this.customersService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateCustomerDto) {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.customersService.delete(id);
  }
}
