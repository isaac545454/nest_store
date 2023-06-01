import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entityes/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDTO } from './dto/createAddress.dto';

@Injectable()
export class AdressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async createAdress(
    cratedAdressDto: CreateAddressDTO,
    userId: number,
  ): Promise<AddressEntity> {
    return this.addressRepository.save({
      ...cratedAdressDto,
      userId,
    });
  }
}
