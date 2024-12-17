import { Test, TestingModule } from '@nestjs/testing';
import { LocationMapService } from './location-map.service';

describe('LocationMapService', () => {
  let service: LocationMapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationMapService],
    }).compile();

    service = module.get<LocationMapService>(LocationMapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
