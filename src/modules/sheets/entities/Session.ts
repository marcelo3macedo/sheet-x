import { Iteration } from '@modules/iterations/entities/Iteration';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { v4 as uuid } from "uuid";

@Entity()
export class Session {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   userId: string;

   @OneToMany(() => Iteration, (iteration: Iteration) => iteration.session)
   iterations: Iteration[];

   @Column()
   nextId: string;

   @Column()
   externalId: string;
  
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