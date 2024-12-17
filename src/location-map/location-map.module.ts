import { Module } from '@nestjs/common';
import { LocationMapService } from './location-map.service';
import { LocationMapResolver } from './location-map.resolver';

@Module({
  providers: [LocationMapResolver, LocationMapService],
})
export class LocationMapModule {}
