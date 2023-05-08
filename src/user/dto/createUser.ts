/* eslint-disable prettier/prettier */
import { IsString, IsEmail } from 'class-validator';
export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  cpf: string;

  @IsString()
  password: string;
}
