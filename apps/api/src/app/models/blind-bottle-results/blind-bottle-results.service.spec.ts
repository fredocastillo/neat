import { Test, TestingModule } from '@nestjs/testing';
import { BlindBottleResultsService } from './blind-bottle-results.service';

describe('BlindBottleResultsService', () => {
  let service: BlindBottleResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlindBottleResultsService],
    }).compile();

    service = module.get<BlindBottleResultsService>(BlindBottleResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
