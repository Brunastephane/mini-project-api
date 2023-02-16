import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    bookName:string;

    @Column({nullable:false})
    bookImage:string;

    @Column({nullable:false})
    bookAuthor:string;
    
    @Column({nullable:false})
    bookLink:string;

    @CreateDateColumn()
    created_at:Date

}