import { Test, TestingModule } from '@nestjs/testing';
import { AsistanceService } from './asistance.service';

describe('AsistanceService', () => {
  let service: AsistanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsistanceService],
    }).compile();

    service = module.get<AsistanceService>(AsistanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
