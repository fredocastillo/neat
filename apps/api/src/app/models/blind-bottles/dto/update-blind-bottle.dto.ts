import { PartialType } from '@nestjs/mapped-types';
import { CreateBlindBottleDto } from './create-blind-bottle.dto';

export class UpdateBlindBottleDto extends PartialType(CreateBlindBottleDto) {}
