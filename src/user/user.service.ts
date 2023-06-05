import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('UserId Not Found');
    }

    return user;
  }
}
