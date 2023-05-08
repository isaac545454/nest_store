/* eslint-disable prettier/prettier */
import { User } from '../entityes/user.entity';
export class ReturnUserDTO {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;

  constructor(userEntity: User) {
    //
    this.id = userEntity.id;
    this.cpf = userEntity.cpf;
    this.name = userEntity.name;
    this.phone = userEntity.phone;
    this.email = userEntity.email;
  }
}
