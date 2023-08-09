import { Column, Entity, ManyToOne } from "typeorm";
import { AuditBase } from "../../../common/entities/audit-base.entity";
import { User } from "../../users/entities/user.entity";
import { BlindBottle } from "../../blind-bottles/entities/blind-bottle.entity";

Entity('blind_bottle_results')
export class BlindBottleResult extends AuditBase {

  @Column()
  userId: number;

  @Column()
  blindBottleId: number;

  @Column({ type: 'int', nullable: true })
  rank: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nose: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  taste: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  other: string;

  @ManyToOne(() => User, (user) => user.blindBottleResults)
  user: User;

  @ManyToOne(() => BlindBottle, (blindBottle) => blindBottle.blindBottleResults)
  blindBottle: BlindBottle;
}
