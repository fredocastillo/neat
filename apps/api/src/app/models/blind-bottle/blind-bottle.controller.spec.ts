import { Test, TestingModule } from '@nestjs/testing';
import { BlindBottleController } from './blind-bottle.controller';
import { BlindBottleService } from './blind-bottle.service';

describe('BlindBottleController', () => {
  let controller: BlindBottleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlindBottleController],
      providers: [BlindBottleService],
    }).compile();

    controller = module.get<BlindBottleController>(BlindBottleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
