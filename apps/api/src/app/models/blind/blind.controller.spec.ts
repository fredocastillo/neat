import { Test, TestingModule } from '@nestjs/testing';
import { BlindController } from './blind.controller';
import { BlindService } from './blind.service';

describe('BlindController', () => {
  let controller: BlindController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlindController],
      providers: [BlindService],
    }).compile();

    controller = module.get<BlindController>(BlindController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
