import { IsNumber, IsNotEmpty, IsPositive, IsArray } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { Product } from '../../products/entities/product.entety';
export class CreateOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  readonly customerId: number;
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
export class AddProductsToOrderDto {
  @IsArray()
  @IsNotEmpty()
  readonly productsIds: Product[];
}
