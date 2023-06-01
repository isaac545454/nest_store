import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Param,
  Body,
} from '@nestjs/common';
import { CreateAddressDTO } from './dto/createAddress.dto';
import { AdressService } from './adress.service';
import { AddressEntity } from './entityes/address.entity';

@Controller('adress')
export class AdressController {
  constructor(private readonly addressService: AdressService) {}

  @Post('/:userId')
  @UsePipes(ValidationPipe)
  async createAdress(
    @Body() createUserDto: CreateAddressDTO,
    @Param('userId') UserId: number,
  ): Promise<AddressEntity> {
    return this.addressService.createAdress(createUserDto, UserId);
  }
}
