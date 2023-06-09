import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeOrm';
import { CityEntity } from './entityes/city.entity';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private cityRepository: Repository<CityEntity>,
    private readonly cacheService: CacheService,
  ) {
    //
  }

  async getAllCityByStateId(stateId: number): Promise<CityEntity[]> {
    return this.cacheService.getCache<CityEntity[]>(`state_${stateId}`, () =>
      this.cityRepository.find({
        where: { stateId },
      }),
    );
  }
  async findCityById(id: number): Promise<CityEntity> {
    const city = await this.cityRepository.findOne({
      where: {
        id,
      },
    });
    if (!city) {
      throw new NotFoundException(`citiId ${id} Not Found `);
    }
    return city;
  }
}
