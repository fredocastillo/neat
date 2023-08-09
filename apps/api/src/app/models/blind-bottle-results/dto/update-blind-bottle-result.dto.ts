import { PartialType } from '@nestjs/mapped-types';
import { CreateBlindBottleResultDto } from './create-blind-bottle-result.dto';

export class UpdateBlindBottleResultDto extends PartialType(
  CreateBlindBottleResultDto
) {}
