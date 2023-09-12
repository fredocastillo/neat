import { Injectable } from '@nestjs/common';
import { CreateBlindDto } from './dto/create-blind.dto';
import { UpdateBlindDto } from './dto/update-blind.dto';

@Injectable()
export class BlindService {
  create(createBlindDto: CreateBlindDto) {
    return 'This action adds a new blind';
  }

  findAll() {
    return `This action returns all blind`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blind`;
  }

  update(id: number, updateBlindDto: UpdateBlindDto) {
    return `This action updates a #${id} blind`;
  }

  remove(id: number) {
    return `This action removes a #${id} blind`;
  }
}
