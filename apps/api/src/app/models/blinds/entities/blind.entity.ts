import { Column, Entity, OneToMany } from "typeorm";
import { AuditBase } from "../../../common/entities/audit-base.entity";
import { BlindUser } from "../../blind-users/entities/blind-user.entity";
import { BlindBottle } from "../../blind-bottles/entities/blind-bottle.entity";

@Entity("blinds")
export class Blind extends AuditBase {

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @OneToMany(() => BlindUser, (blindUser) => blindUser.blind)
  blindUsers: BlindUser[];

  @OneToMany(() => BlindBottle, (blindBottle) => blindBottle.blind)
  blindBottles: BlindBottle[];
  
}
