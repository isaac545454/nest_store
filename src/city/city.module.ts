import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './entityes/city.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CityEntity]),
    CacheModule.register({
      ttl: 900000000,
    }),
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
