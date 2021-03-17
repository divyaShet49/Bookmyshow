import { Test, TestingModule } from '@nestjs/testing';
import { TheaterResolver } from './theater.resolver';
import { TheaterService } from './theater.service';

describe('TheaterResolver', () => {
  let resolver: TheaterResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheaterResolver, TheaterService],
    }).compile();

    resolver = module.get<TheaterResolver>(TheaterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
