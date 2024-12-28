import { Test, TestingModule } from '@nestjs/testing';
import { BaazarResolver } from './baazar.resolver';
import { BaazarService } from './baazar.service';

describe('BaazarResolver', () => {
  let resolver: BaazarResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaazarResolver, BaazarService],
    }).compile();

    resolver = module.get<BaazarResolver>(BaazarResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
