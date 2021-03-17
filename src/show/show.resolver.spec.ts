import { Test, TestingModule } from '@nestjs/testing';
import { ShowResolver } from './show.resolver';
import { ShowService } from './show.service';

describe('ShowResolver', () => {
  let resolver: ShowResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowResolver, ShowService],
    }).compile();

    resolver = module.get<ShowResolver>(ShowResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
