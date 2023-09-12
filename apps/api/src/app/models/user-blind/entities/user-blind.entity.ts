import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { AuditBase } from "../../../common/entities/audit-base.entity";
import { User } from "../../user/entities/user.entity";
import { Blind } from "../../blind/entities/blind.entity";

@Entity("user_blinds")
export class UserBlind extends AuditBase {

  @ManyToOne(() => User, (user) => user.userBlinds)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Blind, (blind) => blind.userBlinds)
  @JoinColumn({ name: 'blind_id' })
  blind: Blind;
}
