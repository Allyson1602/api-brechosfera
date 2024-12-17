import { Test, TestingModule } from '@nestjs/testing';
import { LocationMapResolver } from './location-map.resolver';
import { LocationMapService } from './location-map.service';

describe('LocationMapResolver', () => {
  let resolver: LocationMapResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationMapResolver, LocationMapService],
    }).compile();

    resolver = module.get<LocationMapResolver>(LocationMapResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
