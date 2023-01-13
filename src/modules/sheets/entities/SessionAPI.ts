import { DeckAPI } from '@modules/decks/entities/DeckAPI';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, JoinColumn, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import { v4 as uuid } from "uuid";
import Card from './CardAPI';

@Entity({ name: "sessions" })
export class SessionAPI {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   userId: string;

   @Column()
   deckId: string;

   @OneToOne(() => DeckAPI)
   @JoinColumn()
   deck: DeckAPI;

   @ManyToMany(() => Card, { cascade: true })
   @JoinTable()
   cards: Card[];
  
   @CreateDateColumn()
   createdAt: Date;

   @DeleteDateColumn()
   deletedAt: Date;

   constructor() {
      if (!this.id) {
         this.id = uuid();
      }
   }
}