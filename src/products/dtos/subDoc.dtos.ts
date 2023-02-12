import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
export class CreateSubDocDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
}

export class UpdateSubDocDto extends PartialType(CreateSubDocDto) {}
