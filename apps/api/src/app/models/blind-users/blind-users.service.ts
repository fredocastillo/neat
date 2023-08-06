import { Injectable } from '@nestjs/common';
import { CreateBlindUserDto } from './dto/create-blind-user.dto';
import { UpdateBlindUserDto } from './dto/update-blind-user.dto';

@Injectable()
export class BlindUsersService {
  create(createBlindUserDto: CreateBlindUserDto) {
    return 'This action adds a new blindUser';
  }

  findAll() {
    return `This action returns all blindUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blindUser`;
  }

  update(id: number, updateBlindUserDto: UpdateBlindUserDto) {
    return `This action updates a #${id} blindUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} blindUser`;
  }
}
