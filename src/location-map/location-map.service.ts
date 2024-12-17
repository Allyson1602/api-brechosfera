import { Injectable } from '@nestjs/common';
import { CreateLocationMapInput } from './dto/create-location-map.input';
import { UpdateLocationMapInput } from './dto/update-location-map.input';

@Injectable()
export class LocationMapService {
  create(createLocationMapInput: CreateLocationMapInput) {
    return 'This action adds a new locationMap';
  }

  findAll() {
    return `This action returns all locationMap`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locationMap`;
  }

  update(id: number, updateLocationMapInput: UpdateLocationMapInput) {
    return { message: `LocationMap #${id} foi atualizado com sucesso!` };
  }

  remove(id: number) {
    return `This action removes a #${id} locationMap`;
  }
}
