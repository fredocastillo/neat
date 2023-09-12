import { Module } from '@nestjs/common';
import { UserBlindService } from './user-blind.service';
import { UserBlindController } from './user-blind.controller';

@Module({
  controllers: [UserBlindController],
  providers: [UserBlindService],
})
export class UserBlindModule {}
