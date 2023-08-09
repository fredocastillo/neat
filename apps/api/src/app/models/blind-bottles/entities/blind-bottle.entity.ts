import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { AuditBase } from "../../../common/entities/audit-base.entity";
import { Blind } from "../../blinds/entities/blind.entity";
import { Bottle } from "../../bottles/entities/bottle.entity";
import { BlindBottleResult } from "../../blind-bottle-results/entities/blind-bottle-result.entity";

Entity('blind_bottles')
export class BlindBottle extends AuditBase {
  
  @Column()
  blindId: number

  @Column()
  bottleId: number

  @ManyToOne(() => Blind, (blind) => blind.blindBottles)
  blind: Blind

  @ManyToOne(() => Bottle, (bottle) => bottle.blindBottles)
  bottle: Bottle

  @OneToMany(() => BlindBottleResult, (blindBottleResult) => blindBottleResult.blindBottle)
  blindBottleResults: BlindBottleResult[];
}
