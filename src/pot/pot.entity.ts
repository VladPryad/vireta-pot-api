import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity("pot")
export default class Pot {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column({nullable: true})
  public name: string;
 
  @Column()
  public accountId: string;
}