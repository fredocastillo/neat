import { Module } from '@nestjs/common';
import { BlindBottleService } from './blind-bottle.service';
import { BlindBottleController } from './blind-bottle.controller';

@Module({
  controllers: [BlindBottleController],
  providers: [BlindBottleService],
})
export class BlindBottleModule {}
