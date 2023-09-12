import { Column, Entity, OneToMany } from "typeorm";
import { AuditBase } from "../../../common/entities/audit-base.entity";
import { UserBlind } from "../../user-blind/entities/user-blind.entity";

@Entity("blinds")
export class Blind extends AuditBase {
  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @OneToMany(() => UserBlind, (userBlind) => userBlind.blind)
  userBlinds: UserBlind[];


}
