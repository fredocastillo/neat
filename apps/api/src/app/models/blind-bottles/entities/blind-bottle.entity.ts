import { Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AuditBase } from "../../../common/entities/audit-base.entity";
import { Blind } from "../../blinds/entities/blind.entity";
import { Bottle } from "../../bottles/entities/bottle.entity";
import { BlindBottleResult } from "../../blind-bottle-results/entities/blind-bottle-result.entity";

Entity('blind_bottles')
export class BlindBottle extends AuditBase {
  
  @ManyToOne(() => Blind, (blind) => blind.blindBottles)
  @JoinColumn({ name: 'blind_id'})
  blind: Blind;

  @ManyToOne(() => Bottle, (bottle) => bottle.blindBottles)
  @JoinColumn({ name: 'bottle_id'})
  bottle: Bottle;

  @OneToMany(() => BlindBottleResult, (blindBottleResult) => blindBottleResult.blindBottle)
  blindBottleResults: BlindBottleResult[];
}
