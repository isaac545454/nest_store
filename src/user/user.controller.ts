import { Controller, Get, Post, Body,    } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser';


@Controller('user')
export class UserController {
  @Get()
  async getAllUsers(): Promise<any> {
    return await true;
  }
  @Post()
  async createUser(@Body() createUser: CreateUserDTO): Promise<any> {
    return await {...createUser, password: undefined};
  }
}
