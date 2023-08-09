import { Column, Entity, Index, OneToMany} from "typeorm";
import { AuditBase } from "../../../common/entities/audit-base.entity";
import { Bottle } from "../../bottles/entities/bottle.entity";
import { BlindUser } from "../../blind-users/entities/blind-user.entity";
import { BlindBottleResult } from "../../blind-bottle-results/entities/blind-bottle-result.entity";

@Entity("users")
export class User extends AuditBase {

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @OneToMany(() => Bottle, (bottle) => bottle.user)
  bottles: Bottle[];

  @OneToMany(() => BlindUser, (blindUser) => blindUser.user)
  blindUsers: BlindUser[];

  @OneToMany(() => BlindBottleResult, (blindBottleResult) => blindBottleResult.user)
  blindBottleResults: BlindBottleResult[];
  
}
