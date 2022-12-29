import { IsNumber, IsNotEmpty, IsPositive, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entety';
import { Product } from 'src/products/entities/product.entety';

export class CreateOrderDto {
  @IsDate()
  readonly date: Date;
  @IsNotEmpty()
  readonly user: User;
  @IsNotEmpty()
  readonly products: Product;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly amount: number;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly total: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
