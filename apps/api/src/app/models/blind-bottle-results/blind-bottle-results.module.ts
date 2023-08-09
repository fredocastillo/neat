import { Module } from '@nestjs/common';
import { BlindBottleResultsService } from './blind-bottle-results.service';
import { BlindBottleResultsController } from './blind-bottle-results.controller';

@Module({
  controllers: [BlindBottleResultsController],
  providers: [BlindBottleResultsService],
})
export class BlindBottleResultsModule {}
