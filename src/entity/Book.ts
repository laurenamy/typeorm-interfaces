import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Author } from "./Author";

@Entity()
export class Photo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  title: string;

  @Column()
  pages: number;

  @Column("text")
  description: string;

  @ManyToOne(type => Author, author => author.books)
  author: Author;

}