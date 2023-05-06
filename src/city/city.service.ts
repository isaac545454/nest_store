import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeOrm';
import { CityEntity } from './entityes/city.entity';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private cityRepository: Repository<CityEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    //
  }

  async getAllCityByStateId(stateId: number): Promise<CityEntity[]> {
    const cityCache: CityEntity[] = await this.cacheManager.get(
      `state_${stateId}`,
    );

    if (cityCache) {
      return cityCache;
    }

    const city = await this.cityRepository.find({
      where: { stateId },
    });

    await this.cacheManager.set(`state_${stateId}`, city);

    return city;
  }
}
