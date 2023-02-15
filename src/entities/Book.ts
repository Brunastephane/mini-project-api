import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{

    @PrimaryGeneratedColumn()
    id:Number;

    @Column({nullable:false})
    bookName:string;

    @Column({nullable:false})
    bookImage:string;

    @Column({nullable:false})
    bookAuthor:string;
    
    @Column({nullable:false})
    bookLink:string;

}