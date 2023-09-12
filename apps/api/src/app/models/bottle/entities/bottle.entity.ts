import { Column, Entity, ManyToOne } from "typeorm";
import { AuditBase } from "../../../common/entities/audit-base.entity";
import { User } from "../../user/entities/user.entity";

@Entity("bottles")
export class Bottle extends AuditBase {

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  batch: string;

  @Column({ type: 'double', nullable: true })
  proof: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  release: string;

  @Column({ type: 'int', nullable: true })
  year: number;

  @Column({ type: 'int', nullable: true })
  age: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  edition: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  warehouse: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  type: string;

  @Column({ type: 'double', nullable: true })
  price: number;

  @ManyToOne(() => User, (user) => user.bottles)
  user: User

}
