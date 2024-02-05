import { Test, TestingModule } from '@nestjs/testing';
import { BlindBottleResultService } from './blind-bottle-result.service';

describe('BlindBottleResultService', () => {
  let service: BlindBottleResultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlindBottleResultService],
    }).compile();

    service = module.get<BlindBottleResultService>(BlindBottleResultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
