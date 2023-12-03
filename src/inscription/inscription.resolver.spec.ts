import { Test, TestingModule } from '@nestjs/testing';
import { InscriptionResolver } from './inscription.resolver';
import { InscriptionService } from './inscription.service';

describe('InscriptionResolver', () => {
  let resolver: InscriptionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InscriptionResolver, InscriptionService],
    }).compile();

    resolver = module.get<InscriptionResolver>(InscriptionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
