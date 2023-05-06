import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser';
import { User } from './entityes/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    //
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    //
    const salt = 10;
    const passwordHash = await hash(createUserDTO.password, salt);
    return this.userRepository.save({
      ...createUserDTO,
      typeUser: 1,
      password: passwordHash,
    });
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
