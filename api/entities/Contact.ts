import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({nullable:false})
    name:string;

    @Column({nullable:false})
    email:string;

    @Column({nullable:false})
    message:string;

    @CreateDateColumn()
    created_at:Date
}