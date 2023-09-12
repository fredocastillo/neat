import { Test, TestingModule } from '@nestjs/testing';
import { BlindBottleService } from './blind-bottle.service';

describe('BlindBottleService', () => {
  let service: BlindBottleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlindBottleService],
    }).compile();

    service = module.get<BlindBottleService>(BlindBottleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
