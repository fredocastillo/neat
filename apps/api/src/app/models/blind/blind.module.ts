import { Module } from '@nestjs/common';
import { BlindService } from './blind.service';
import { BlindController } from './blind.controller';

@Module({
  controllers: [BlindController],
  providers: [BlindService],
})
export class BlindModule {}
