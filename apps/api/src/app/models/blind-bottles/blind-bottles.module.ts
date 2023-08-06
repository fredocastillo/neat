import { Module } from '@nestjs/common';
import { BlindBottlesService } from './blind-bottles.service';
import { BlindBottlesController } from './blind-bottles.controller';

@Module({
  controllers: [BlindBottlesController],
  providers: [BlindBottlesService],
})
export class BlindBottlesModule {}
