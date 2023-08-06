import { Injectable } from '@nestjs/common';
import { CreateBlindBottleDto } from './dto/create-blind-bottle.dto';
import { UpdateBlindBottleDto } from './dto/update-blind-bottle.dto';

@Injectable()
export class BlindBottlesService {
  create(createBlindBottleDto: CreateBlindBottleDto) {
    return 'This action adds a new blindBottle';
  }

  findAll() {
    return `This action returns all blindBottles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blindBottle`;
  }

  update(id: number, updateBlindBottleDto: UpdateBlindBottleDto) {
    return `This action updates a #${id} blindBottle`;
  }

  remove(id: number) {
    return `This action removes a #${id} blindBottle`;
  }
}
