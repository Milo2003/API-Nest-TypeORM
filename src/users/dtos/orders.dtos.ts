import {
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsDate,
  IsMongoId,
  IsArray,
} from 'class-validator';
import { PartialType, ApiProperty, OmitType } from '@nestjs/swagger';
export class CreateOrderDto {
  @IsNotEmpty()
  @IsMongoId()
  readonly customer: string;
  @ApiProperty()
  @IsDate()
  readonly date: Date;
  // @ApiProperty()
  // @IsNotEmpty()
  // readonly user: User;
  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  readonly products: string[];
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

export class UpdateOrderDto extends PartialType(
  OmitType(CreateOrderDto, ['products']),
) {}

export class AddProductsToOrderDto {
  @IsArray()
  @IsNotEmpty()
  readonly productsIds: string[];
}
