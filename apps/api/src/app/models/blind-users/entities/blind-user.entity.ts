import { Column, Entity, ManyToOne } from "typeorm";
import { AuditBase } from "../../../common/entities/audit-base.entity";
import { Blind } from "../../blinds/entities/blind.entity";
import { User } from "../../users/entities/user.entity";

Entity('blind_users')
export class BlindUser extends AuditBase {

  @Column()
  blindId: number;

  @Column()
  userId: number;

  @ManyToOne(() => Blind, (blind) => blind.blindUsers)
  blind: Blind;

  @ManyToOne(() => User, (user) => user.blindUsers)
  user: User;
}
