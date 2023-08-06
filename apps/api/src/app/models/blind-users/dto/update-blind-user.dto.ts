import { PartialType } from '@nestjs/mapped-types';
import { CreateBlindUserDto } from './create-blind-user.dto';

export class UpdateBlindUserDto extends PartialType(CreateBlindUserDto) {}
