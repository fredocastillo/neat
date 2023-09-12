import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlindBottleService } from './blind-bottle.service';
import { CreateBlindBottleDto } from './dto/create-blind-bottle.dto';
import { UpdateBlindBottleDto } from './dto/update-blind-bottle.dto';

@Controller('blind-bottle')
export class BlindBottleController {
  constructor(private readonly blindBottleService: BlindBottleService) {}

  @Post()
  create(@Body() createBlindBottleDto: CreateBlindBottleDto) {
    return this.blindBottleService.create(createBlindBottleDto);
  }

  @Get()
  findAll() {
    return this.blindBottleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blindBottleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBlindBottleDto: UpdateBlindBottleDto
  ) {
    return this.blindBottleService.update(+id, updateBlindBottleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blindBottleService.remove(+id);
  }
}
