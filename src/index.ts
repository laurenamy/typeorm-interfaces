import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/Author";
import {Book} from "./entity/Book";
import {IAuthor} from "./interface/IAuthor"
import {IBook} from "./interface/IBook";

createConnection().then(async connection => {

    const authorInfo = {
        firstName: "George",
        lastName: "Orwell",
        age: 99,
        books: [{ title: "1984" }, { title: "Animal Farm" }]
    }

    function addAuthor(author: IAuthor) {
        let newAuthor = new Author({author});
        let newBooks = author.books;
        newBooks.forEach(book => {
            addBooksFromAuthor(book);
        });
    }

    function addBooksFromAuthor(book: IBook) {
        let newBook = new Book({book});
    }

}).catch(error => console.log(error));
