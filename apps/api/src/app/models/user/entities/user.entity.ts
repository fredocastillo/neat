import { Column, Entity, Index, OneToMany } from "typeorm";
import { AuditBase } from "../../../common/entities/audit-base.entity";
import { UserBlind } from "../../user-blind/entities/user-blind.entity";
import { Bottle } from "../../bottle/entities/bottle.entity";

@Entity("users")
export class User extends AuditBase{

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @OneToMany(() => UserBlind, (userBlind) => userBlind.user)
  userBlinds: UserBlind[];

  @OneToMany(() => Bottle, (bottle) => bottle.user)
  bottles: Bottle[];
  
}
