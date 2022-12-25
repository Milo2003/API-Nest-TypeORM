import {
  IsNumber,
  IsString,
  IsUrl,
  IsNotEmpty,
  IsPositive,
  IsEmail,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
  @IsNotEmpty()
  @IsString()
  readonly role: string;
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
