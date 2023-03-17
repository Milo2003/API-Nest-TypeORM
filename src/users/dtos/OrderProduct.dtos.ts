import { IsNotEmpty, IsPositive, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  readonly customerId: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  readonly productId: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  readonly orderId: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  readonly quantity: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  readonly fullPrice: number;
}

export class UpdateOrderProductDto {
  @ApiProperty()
  @IsOptional()
  @IsPositive()
  readonly customerId: number;
  @ApiProperty()
  @IsOptional()
  @IsPositive()
  readonly productId: number;
  @ApiProperty()
  @IsOptional()
  @IsPositive()
  readonly orderId: number;
  @ApiProperty()
  @IsOptional()
  @IsPositive()
  readonly quantity: number;
  @ApiProperty()
  @IsOptional()
  @IsPositive()
  readonly fullPrice: number;
}
