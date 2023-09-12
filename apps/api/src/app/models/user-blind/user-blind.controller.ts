import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserBlindService } from './user-blind.service';
import { CreateUserBlindDto } from './dto/create-user-blind.dto';
import { UpdateUserBlindDto } from './dto/update-user-blind.dto';

@Controller('user-blind')
export class UserBlindController {
  constructor(private readonly userBlindService: UserBlindService) {}

  @Post()
  create(@Body() createUserBlindDto: CreateUserBlindDto) {
    return this.userBlindService.create(createUserBlindDto);
  }

  @Get()
  findAll() {
    return this.userBlindService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userBlindService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserBlindDto: UpdateUserBlindDto
  ) {
    return this.userBlindService.update(+id, updateUserBlindDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userBlindService.remove(+id);
  }
}
