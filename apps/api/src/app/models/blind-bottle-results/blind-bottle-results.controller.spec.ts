import { Test, TestingModule } from '@nestjs/testing';
import { BlindBottleResultsController } from './blind-bottle-results.controller';
import { BlindBottleResultsService } from './blind-bottle-results.service';

describe('BlindBottleResultsController', () => {
  let controller: BlindBottleResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlindBottleResultsController],
      providers: [BlindBottleResultsService],
    }).compile();

    controller = module.get<BlindBottleResultsController>(
      BlindBottleResultsController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
