import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlindBottleResultsService } from './blind-bottle-results.service';
import { CreateBlindBottleResultDto } from './dto/create-blind-bottle-result.dto';
import { UpdateBlindBottleResultDto } from './dto/update-blind-bottle-result.dto';

@Controller('blind-bottle-results')
export class BlindBottleResultsController {
  constructor(
    private readonly blindBottleResultsService: BlindBottleResultsService
  ) {}

  @Post()
  create(@Body() createBlindBottleResultDto: CreateBlindBottleResultDto) {
    return this.blindBottleResultsService.create(createBlindBottleResultDto);
  }

  @Get()
  findAll() {
    return this.blindBottleResultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blindBottleResultsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBlindBottleResultDto: UpdateBlindBottleResultDto
  ) {
    return this.blindBottleResultsService.update(
      +id,
      updateBlindBottleResultDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blindBottleResultsService.remove(+id);
  }
}
