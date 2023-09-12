import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBlindDto } from './create-user-blind.dto';

export class UpdateUserBlindDto extends PartialType(CreateUserBlindDto) {}
