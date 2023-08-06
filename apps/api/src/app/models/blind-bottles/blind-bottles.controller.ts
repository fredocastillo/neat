import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlindBottlesService } from './blind-bottles.service';
import { CreateBlindBottleDto } from './dto/create-blind-bottle.dto';
import { UpdateBlindBottleDto } from './dto/update-blind-bottle.dto';

@Controller('blind-bottles')
export class BlindBottlesController {
  constructor(private readonly blindBottlesService: BlindBottlesService) {}

  @Post()
  create(@Body() createBlindBottleDto: CreateBlindBottleDto) {
    return this.blindBottlesService.create(createBlindBottleDto);
  }

  @Get()
  findAll() {
    return this.blindBottlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blindBottlesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBlindBottleDto: UpdateBlindBottleDto
  ) {
    return this.blindBottlesService.update(+id, updateBlindBottleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blindBottlesService.remove(+id);
  }
}
