import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Baazar } from './entities/baazar.entity';
import { LocationMap } from 'src/location-map/entities/location-map.entity';
import { CreateBaazarInput } from './dto/create-baazar.input';
import { UpdateBaazarInput } from './dto/update-baazar.input';

@Injectable()
export class BaazarService {
  constructor(
    @InjectRepository(Baazar)
    private baazarRepository: Repository<Baazar>,
    @InjectRepository(LocationMap)
    private locationMapRepository: Repository<LocationMap>,
  ) {}

  async create(createBaazarInput: CreateBaazarInput) {
    const { locationMap } = createBaazarInput;

    const locationMapCreated = this.locationMapRepository.create(locationMap);

    const baazar = this.baazarRepository.create({
      ...createBaazarInput,
      locationMap: locationMapCreated,
    });

    return this.baazarRepository.save(baazar);
  }

  findAll() {
    return this.baazarRepository.find({ relations: ['locationMap'] });
  }

  findOne(id: number) {
    return this.baazarRepository.findOne({
      where: { id },
      relations: ['locationMap'],
    });
  }

  async update(id: number, updateBaazarInput: UpdateBaazarInput) {
    const baazar = await this.findOne(id);

    if (!baazar) {
      throw new Error(`Erro ao atualizar o bazar/brechó.`);
    }

    const updatedBaazar = Object.assign(baazar, updateBaazarInput);
    await this.baazarRepository.save(updatedBaazar);

    return { status: true };
  }

  async remove(id: number) {
    const baazar = await this.findOne(id);

    if (!baazar) {
      throw new Error(`Baazar with id ${id} not found.`);
    }

    await this.baazarRepository.remove(baazar);

    return baazar;
  }
}
