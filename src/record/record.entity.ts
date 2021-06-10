import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity("record")
export default class Record {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public potId: number;
 
  @Column({nullable: true})
  public ph: string;
 
  @Column({nullable: true})
  public humidity: string;

  @Column({nullable: true})
  public salinity: string;
 
  @Column({nullable: true})
  public index: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  public timestamp: Date;
}