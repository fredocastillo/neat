import { Test, TestingModule } from '@nestjs/testing';
import { BlindsService } from './blinds.service';

describe('BlindsService', () => {
  let service: BlindsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlindsService],
    }).compile();

    service = module.get<BlindsService>(BlindsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
