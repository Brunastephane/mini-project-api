import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({nullable:false})
    name:string;

    @Column({nullable:false})
    rating:number;

    @Column({nullable:false})
    review:string;

    @ManyToOne(()=>Book)
    @JoinColumn({name:"book_id"})
    book:Book;

    @CreateDateColumn()
    created_at:Date
}