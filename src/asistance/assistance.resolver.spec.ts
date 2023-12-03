import { Test, TestingModule } from '@nestjs/testing';
import { AssistanceResolver } from './assistance.resolver';
import { AssistanceService } from './assistanceService';

describe('AssistanceResolver', () => {
  let resolver: AssistanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssistanceResolver, AssistanceService],
    }).compile();

    resolver = module.get<AssistanceResolver>(AssistanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
