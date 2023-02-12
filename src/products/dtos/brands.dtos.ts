import { IsString, IsUrl, IsNotEmpty, IsOptional } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
export class CreateBrandDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly description: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
