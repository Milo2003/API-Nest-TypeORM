import {
  IsNumber,
  IsString,
  IsUrl,
  IsNotEmpty,
  IsPositive,
  IsOptional,
  Min,
  ValidateIf,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
// import { CreateCategoryDto } from './categories.dtos';
export class CreateProductDto {
  @ApiProperty({ description: 'name of product' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly stock: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
  // @ApiProperty()
  // @ValidateNested()
  // @IsNotEmpty()
  // readonly category: CreateCategoryDto;
  // @IsNotEmpty()
  // @IsMongoId()
  // readonly brand: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class FilterProductDto {
  @IsOptional()
  @IsPositive()
  limit: number;
  @IsOptional()
  @Min(0)
  offset: number;
  @IsOptional()
  @Min(0)
  minPrice: number;
  @ValidateIf((params) => params.minPrice)
  @IsPositive()
  maxPrice: number;
}
