import { Test, TestingModule } from '@nestjs/testing';
import { UserBlindService } from './user-blind.service';

describe('UserBlindService', () => {
  let service: UserBlindService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBlindService],
    }).compile();

    service = module.get<UserBlindService>(UserBlindService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
