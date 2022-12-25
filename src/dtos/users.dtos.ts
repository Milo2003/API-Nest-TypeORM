import { IsString, IsUrl, IsNotEmpty, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly role: string;
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
