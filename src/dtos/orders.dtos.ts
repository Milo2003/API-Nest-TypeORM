import {
  IsNumber,
  IsString,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly total: number;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly amount: number;
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
