import { Test, TestingModule } from '@nestjs/testing';
import { AsistanceResolver } from './asistance.resolver';
import { AsistanceService } from './asistance.service';

describe('AsistanceResolver', () => {
  let resolver: AsistanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsistanceResolver, AsistanceService],
    }).compile();

    resolver = module.get<AsistanceResolver>(AsistanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
