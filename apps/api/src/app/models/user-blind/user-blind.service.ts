import { Injectable } from '@nestjs/common';
import { CreateUserBlindDto } from './dto/create-user-blind.dto';
import { UpdateUserBlindDto } from './dto/update-user-blind.dto';

@Injectable()
export class UserBlindService {
  create(createUserBlindDto: CreateUserBlindDto) {
    return 'This action adds a new userBlind';
  }

  findAll() {
    return `This action returns all userBlind`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userBlind`;
  }

  update(id: number, updateUserBlindDto: UpdateUserBlindDto) {
    return `This action updates a #${id} userBlind`;
  }

  remove(id: number) {
    return `This action removes a #${id} userBlind`;
  }
}
