import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser';
import { UserService } from './user.service';
import { User } from './entityes/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDTO): Promise<User> {
    return await this.userService.createUser(createUser);
  }
}
