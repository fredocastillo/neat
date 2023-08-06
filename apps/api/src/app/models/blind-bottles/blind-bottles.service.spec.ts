import { Test, TestingModule } from '@nestjs/testing';
import { BlindBottlesService } from './blind-bottles.service';

describe('BlindBottlesService', () => {
  let service: BlindBottlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlindBottlesService],
    }).compile();

    service = module.get<BlindBottlesService>(BlindBottlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
