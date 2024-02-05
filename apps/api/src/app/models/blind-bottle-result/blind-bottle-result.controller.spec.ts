import { Test, TestingModule } from '@nestjs/testing';
import { BlindBottleResultController } from './blind-bottle-result.controller';
import { BlindBottleResultService } from './blind-bottle-result.service';

describe('BlindBottleResultController', () => {
  let controller: BlindBottleResultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlindBottleResultController],
      providers: [BlindBottleResultService],
    }).compile();

    controller = module.get<BlindBottleResultController>(
      BlindBottleResultController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
