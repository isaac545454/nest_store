import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entityes/address.entity';
import { AdressController } from './adress.controller';
import { AdressService } from './adress.service';
import { UserModule } from 'src/user/user.module';
import { CityModule } from 'src/city/city.module';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity]), UserModule, CityModule],
  providers: [AdressService],
  controllers: [AdressController],
  exports: [AdressService],
})
export class AddressModule {}
