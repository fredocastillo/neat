import { Injectable } from '@nestjs/common';
import { CreateBlindBottleResultDto } from './dto/create-blind-bottle-result.dto';
import { UpdateBlindBottleResultDto } from './dto/update-blind-bottle-result.dto';

@Injectable()
export class BlindBottleResultService {
  create(createBlindBottleResultDto: CreateBlindBottleResultDto) {
    return 'This action adds a new blindBottleResult';
  }

  findAll() {
    return `This action returns all blindBottleResult`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blindBottleResult`;
  }

  update(id: number, updateBlindBottleResultDto: UpdateBlindBottleResultDto) {
    return `This action updates a #${id} blindBottleResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} blindBottleResult`;
  }
}
