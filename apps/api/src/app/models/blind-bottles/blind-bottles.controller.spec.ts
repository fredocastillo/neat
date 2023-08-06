import { Test, TestingModule } from '@nestjs/testing';
import { BlindBottlesController } from './blind-bottles.controller';
import { BlindBottlesService } from './blind-bottles.service';

describe('BlindBottlesController', () => {
  let controller: BlindBottlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlindBottlesController],
      providers: [BlindBottlesService],
    }).compile();

    controller = module.get<BlindBottlesController>(BlindBottlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
