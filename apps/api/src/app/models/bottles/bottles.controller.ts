import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BottlesService } from './bottles.service';
import { CreateBottleDto } from './dto/create-bottle.dto';
import { UpdateBottleDto } from './dto/update-bottle.dto';

@Controller('bottles')
export class BottlesController {
  constructor(private readonly bottlesService: BottlesService) {}

  @Post()
  create(@Body() createBottleDto: CreateBottleDto) {
    return this.bottlesService.create(createBottleDto);
  }

  @Get()
  findAll() {
    return this.bottlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bottlesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBottleDto: UpdateBottleDto) {
    return this.bottlesService.update(+id, updateBottleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bottlesService.remove(+id);
  }
}
