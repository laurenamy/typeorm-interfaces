import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Photo } from "./Photo";
import { IAuthor } from "././interface/IAuthor";

@Entity()
export class Author extends iAuthor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(type => Book, book => book.author)
    books: Books[];
}