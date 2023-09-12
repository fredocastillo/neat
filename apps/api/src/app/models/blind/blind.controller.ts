import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlindService } from './blind.service';
import { CreateBlindDto } from './dto/create-blind.dto';
import { UpdateBlindDto } from './dto/update-blind.dto';

@Controller('blind')
export class BlindController {
  constructor(private readonly blindService: BlindService) {}

  @Post()
  create(@Body() createBlindDto: CreateBlindDto) {
    return this.blindService.create(createBlindDto);
  }

  @Get()
  findAll() {
    return this.blindService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blindService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlindDto: UpdateBlindDto) {
    return this.blindService.update(+id, updateBlindDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blindService.remove(+id);
  }
}
