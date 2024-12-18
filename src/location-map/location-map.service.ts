import { Injectable } from '@nestjs/common';
import { CreateLocationMapInput } from './dto/create-location-map.input';
import { UpdateLocationMapInput } from './dto/update-location-map.input';
import { Repository } from 'typeorm';
import { LocationMap } from './entities/location-map.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LocationMapService {
  constructor(
    @InjectRepository(LocationMap)
    private locationMapRepository: Repository<LocationMap>,
  ) {}

  async create(createLocationMapInput: CreateLocationMapInput) {
    const newLocation = this.locationMapRepository.create(
      createLocationMapInput,
    );
    return await this.locationMapRepository.save(newLocation);
  }

  async findAll() {
    const locationsMap = await this.locationMapRepository.find();

    if (!locationsMap) {
      throw new Error(`Localizações não encontradas.`);
    }

    return locationsMap;
  }

  async findOne(id: number) {
    const location = await this.locationMapRepository.findOneBy({ id });

    if (!location) {
      throw new Error(`Localização com id ${id} não encontrada.`);
    }

    return location;
  }

  async update(id: number, updateLocationMapInput: UpdateLocationMapInput) {
    const location = await this.findOne(id);

    if (!location) {
      throw new Error(`Erro ao atualizar localização.`);
    }

    const updatedLocation = Object.assign(location, updateLocationMapInput);
    await this.locationMapRepository.save(updatedLocation);

    return { status: true };
  }

  async remove(id: number) {
    const location = await this.findOne(id);

    await this.locationMapRepository.remove(location);

    return { status: true };
  }
}
