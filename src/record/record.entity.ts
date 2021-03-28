import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity("record")
export default class Record {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  public ph: string;
 
  @Column()
  public humidity: string;

  @Column()
  public salinity: string;
 
  @Column()
  public index: number;

  @CreateDateColumn()
  public timestamp: Date;
}