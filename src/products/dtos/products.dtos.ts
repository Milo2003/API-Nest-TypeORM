import {
  IsNumber,
  IsString,
  IsUrl,
  IsNotEmpty,
  IsPositive,
  IsOptional,
  Min,
  ValidateIf,
  IsArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
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
  @IsNotEmpty()
  @ApiProperty()
  @IsPositive()
  readonly brandId: number;
  @IsNotEmpty()
  @ApiProperty()
  @IsArray()
  readonly categoriesIds: number[];
  // @ApiProperty()
  // @ValidateNested()
  // @IsNotEmpty()
  // readonly category: CreateCategoryDto;
  // @IsNotEmpty()
  // @IsMongoId()
  // readonly brand: string;
}

export class UpdateProductDto {
  @ApiProperty({ description: 'name of product' })
  @IsOptional()
  @IsString()
  readonly name: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly description: string;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @IsPositive()
  readonly price: number;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @IsPositive()
  readonly stock: number;
  @ApiProperty()
  @IsOptional()
  @IsUrl()
  readonly image: string;
  @IsOptional()
  @ApiProperty()
  @IsPositive()
  readonly brandId: number;
  @IsOptional()
  @ApiProperty()
  @IsArray()
  readonly categoriesIds: number[];
}
export class FilterProductDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  limit: number;
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset: number;
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  minPrice: number;
  @ValidateIf((params) => params.minPrice)
  @IsPositive()
  @Type(() => Number)
  maxPrice: number;
}
