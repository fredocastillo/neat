import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlindBottleResultService } from './blind-bottle-result.service';
import { CreateBlindBottleResultDto } from './dto/create-blind-bottle-result.dto';
import { UpdateBlindBottleResultDto } from './dto/update-blind-bottle-result.dto';

@Controller('blind-bottle-result')
export class BlindBottleResultController {
  constructor(
    private readonly blindBottleResultService: BlindBottleResultService
  ) {}

  @Post()
  create(@Body() createBlindBottleResultDto: CreateBlindBottleResultDto) {
    return this.blindBottleResultService.create(createBlindBottleResultDto);
  }

  @Get()
  findAll() {
    return this.blindBottleResultService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blindBottleResultService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBlindBottleResultDto: UpdateBlindBottleResultDto
  ) {
    return this.blindBottleResultService.update(
      +id,
      updateBlindBottleResultDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blindBottleResultService.remove(+id);
  }
}
