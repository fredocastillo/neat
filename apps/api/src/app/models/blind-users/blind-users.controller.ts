import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlindUsersService } from './blind-users.service';
import { CreateBlindUserDto } from './dto/create-blind-user.dto';
import { UpdateBlindUserDto } from './dto/update-blind-user.dto';

@Controller('blind-users')
export class BlindUsersController {
  constructor(private readonly blindUsersService: BlindUsersService) {}

  @Post()
  create(@Body() createBlindUserDto: CreateBlindUserDto) {
    return this.blindUsersService.create(createBlindUserDto);
  }

  @Get()
  findAll() {
    return this.blindUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blindUsersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBlindUserDto: UpdateBlindUserDto
  ) {
    return this.blindUsersService.update(+id, updateBlindUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blindUsersService.remove(+id);
  }
}
