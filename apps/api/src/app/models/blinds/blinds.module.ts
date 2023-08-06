import { Module } from '@nestjs/common';
import { BlindsService } from './blinds.service';
import { BlindsController } from './blinds.controller';

@Module({
  controllers: [BlindsController],
  providers: [BlindsService],
})
export class BlindsModule {}
