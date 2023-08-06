import { Test, TestingModule } from '@nestjs/testing';
import { BlindUsersService } from './blind-users.service';

describe('BlindUsersService', () => {
  let service: BlindUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlindUsersService],
    }).compile();

    service = module.get<BlindUsersService>(BlindUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
