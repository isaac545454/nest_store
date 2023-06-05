import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entityes/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDTO } from './dto/createAddress.dto';
import { UserService } from 'src/user/user.service';
import { CityService } from 'src/city/city.service';

@Injectable()
export class AdressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly userService: UserService,
    private readonly cityService: CityService,
  ) {}

  async createAdress(
    cratedAdressDto: CreateAddressDTO,
    userId: number,
  ): Promise<AddressEntity> {
    await this.userService.findUserById(userId);
    await this.cityService.findCityById(cratedAdressDto.cityId);
    return this.addressRepository.save({
      ...cratedAdressDto,
      userId,
    });
  }
}
