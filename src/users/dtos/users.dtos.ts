import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsPositive,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly password: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly role: string;
  @ApiProperty()
  @IsPositive()
  @IsOptional()
  readonly customerId: number;
}

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsEmail()
  readonly email: string;
  @ApiProperty()
  @IsOptional()
  readonly password: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly role: string;
  @ApiProperty()
  @IsPositive()
  @IsOptional()
  readonly customerId: number;
}
