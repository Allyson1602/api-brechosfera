import { Module } from '@nestjs/common';
import { LocationMapService } from './location-map.service';
import { LocationMapResolver } from './location-map.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationMap } from './entities/location-map.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocationMap])],
  providers: [LocationMapResolver, LocationMapService],
  exports: [LocationMapService, TypeOrmModule],
})
export class LocationMapModule {}
