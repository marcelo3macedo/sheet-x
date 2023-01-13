import { Column, CreateDateColumn, Entity, PrimaryColumn, OneToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('cards')
export default class Card {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  secretContent: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor() {
    this.id = uuid();
  }
}