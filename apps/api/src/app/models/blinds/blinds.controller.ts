import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlindsService } from './blinds.service';
import { CreateBlindDto } from './dto/create-blind.dto';
import { UpdateBlindDto } from './dto/update-blind.dto';

@Controller('blinds')
export class BlindsController {
  constructor(private readonly blindsService: BlindsService) {}

  @Post()
  create(@Body() createBlindDto: CreateBlindDto) {
    return this.blindsService.create(createBlindDto);
  }

  @Get()
  findAll() {
    return this.blindsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blindsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlindDto: UpdateBlindDto) {
    return this.blindsService.update(+id, updateBlindDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blindsService.remove(+id);
  }
}
