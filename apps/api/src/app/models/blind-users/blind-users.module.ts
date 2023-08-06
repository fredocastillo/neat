import { Module } from '@nestjs/common';
import { BlindUsersService } from './blind-users.service';
import { BlindUsersController } from './blind-users.controller';

@Module({
  controllers: [BlindUsersController],
  providers: [BlindUsersService],
})
export class BlindUsersModule {}
