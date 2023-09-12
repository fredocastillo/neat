import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BottleService } from './bottle.service';
import { CreateBottleDto } from './dto/create-bottle.dto';
import { UpdateBottleDto } from './dto/update-bottle.dto';

@Controller('bottle')
export class BottleController {
  constructor(private readonly bottleService: BottleService) {}

  @Post()
  create(@Body() createBottleDto: CreateBottleDto) {
    return this.bottleService.create(createBottleDto);
  }

  @Get()
  findAll() {
    return this.bottleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bottleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBottleDto: UpdateBottleDto) {
    return this.bottleService.update(+id, updateBottleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bottleService.remove(+id);
  }
}
