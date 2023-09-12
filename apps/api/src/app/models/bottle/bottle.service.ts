import { Injectable } from '@nestjs/common';
import { CreateBottleDto } from './dto/create-bottle.dto';
import { UpdateBottleDto } from './dto/update-bottle.dto';

@Injectable()
export class BottleService {
  create(createBottleDto: CreateBottleDto) {
    return 'This action adds a new bottle';
  }

  findAll() {
    return `This action returns all bottle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bottle`;
  }

  update(id: number, updateBottleDto: UpdateBottleDto) {
    return `This action updates a #${id} bottle`;
  }

  remove(id: number) {
    return `This action removes a #${id} bottle`;
  }
}
