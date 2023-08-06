import { Test, TestingModule } from '@nestjs/testing';
import { BlindUsersController } from './blind-users.controller';
import { BlindUsersService } from './blind-users.service';

describe('BlindUsersController', () => {
  let controller: BlindUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlindUsersController],
      providers: [BlindUsersService],
    }).compile();

    controller = module.get<BlindUsersController>(BlindUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
