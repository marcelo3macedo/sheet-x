import { v4 as uuid } from "uuid";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: "sessions_cards_cards" })
export class SessionCardAPI {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   sessionsId: string;

   @Column()
   cardsId: string;

   @Column()
   difficultyId: string;
  
   @CreateDateColumn()
   createdAt: Date;

   @UpdateDateColumn()
   answeredAt: Date;

   @DeleteDateColumn()
   deletedAt: Date;

   constructor() {
      if (!this.id) {
         this.id = uuid();
      }
   }
}