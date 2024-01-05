import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
}
addBook(book:Book): void {
this.getBooks().then(books => {
    let maxIndex = books.length - 1;
  let bookWithMaxIndex = books[maxIndex];
  book.id = bookWithMaxIndex.id + 1;
  books.push(book);}
);
}
 getBook(id: number): Promise<Book | undefined> {
    return this.getBooks()
        .then(books => books.find(book => book.id === id));
}

}
