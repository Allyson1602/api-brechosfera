import { Test, TestingModule } from '@nestjs/testing';
import { BaazarService } from './baazar.service';

describe('BaazarService', () => {
  let service: BaazarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaazarService],
    }).compile();

    service = module.get<BaazarService>(BaazarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
