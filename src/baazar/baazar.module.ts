import { Module } from '@nestjs/common';
import { BaazarService } from './baazar.service';
import { BaazarResolver } from './baazar.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationMap } from 'src/location-map/entities/location-map.entity';
import { Baazar } from './entities/baazar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Baazar, LocationMap])],
  providers: [BaazarResolver, BaazarService],
})
export class BaazarModule {}
