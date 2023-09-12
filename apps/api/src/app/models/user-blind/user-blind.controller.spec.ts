import { Test, TestingModule } from '@nestjs/testing';
import { UserBlindController } from './user-blind.controller';
import { UserBlindService } from './user-blind.service';

describe('UserBlindController', () => {
  let controller: UserBlindController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserBlindController],
      providers: [UserBlindService],
    }).compile();

    controller = module.get<UserBlindController>(UserBlindController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
