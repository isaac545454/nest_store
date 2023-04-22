import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private Users: User[] = [];
  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    //
    const salt = 10;
    const passwordHash = await hash(createUserDTO.password, salt);

    const newUser: User = {
      ...createUserDTO,
      password: passwordHash,
      id: this.Users.length + 1,
    };

    this.Users.push(newUser);

    return newUser;
  }

  async getAllUsers(): Promise<User[]> {
    return await this.Users;
  }
}
