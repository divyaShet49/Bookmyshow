import { Test, TestingModule } from '@nestjs/testing';
import { ScreenResolver } from './screen.resolver';
import { ScreenService } from './screen.service';

describe('ScreenResolver', () => {
  let resolver: ScreenResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScreenResolver, ScreenService],
    }).compile();

    resolver = module.get<ScreenResolver>(ScreenResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
