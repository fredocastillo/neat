import { Test, TestingModule } from '@nestjs/testing';
import { BlindsController } from './blinds.controller';
import { BlindsService } from './blinds.service';

describe('BlindsController', () => {
  let controller: BlindsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlindsController],
      providers: [BlindsService],
    }).compile();

    controller = module.get<BlindsController>(BlindsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
