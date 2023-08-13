import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { AuditBase } from "../../../common/entities/audit-base.entity";
import { Blind } from "../../blinds/entities/blind.entity";
import { User } from "../../users/entities/user.entity";

Entity('blind_users')
export class BlindUser extends AuditBase {

  @ManyToOne(() => Blind, (blind) => blind.blindUsers)
  @JoinColumn({ name: 'blind_id'})
  blind: Blind;

  @ManyToOne(() => User, (user) => user.blindUsers)
  @JoinColumn({ name: 'user_id'})
  user: User;
}
