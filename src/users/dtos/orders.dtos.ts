import { IsNumber, IsNotEmpty, IsPositive, IsDate } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entety';
import { Product } from 'src/products/entities/product.entety';

export class CreateOrderDto {
  @ApiProperty()
  @IsDate()
  readonly date: Date;
  @ApiProperty()
  @IsNotEmpty()
  readonly user: User;
  @ApiProperty()
  @IsNotEmpty()
  readonly products: Product;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly amount: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly total: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
