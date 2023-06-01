import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entityes/address.entity';
import { AdressController } from './adress.controller';
import { AdressService } from './adress.service';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity])],
  providers: [AdressService],
  controllers: [AdressController],
  exports: [AdressService],
})
export class AddressModule {}
