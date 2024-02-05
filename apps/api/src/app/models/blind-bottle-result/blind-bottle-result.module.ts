import { Module } from '@nestjs/common';
import { BlindBottleResultService } from './blind-bottle-result.service';
import { BlindBottleResultController } from './blind-bottle-result.controller';

@Module({
  controllers: [BlindBottleResultController],
  providers: [BlindBottleResultService],
})
export class BlindBottleResultModule {}
