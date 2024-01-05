import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../Services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../Services/book';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {
  books: Book[] ;
	book: Book = new Book();
	constructor(private router: Router,
	            private bookService: BookService) { }
    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
    }
    ngOnInit(): void {
        this.getBooks();
    }
    addBook(): void {
	    this.bookService.addBook(this.book);
		this.router.navigate(['/home']);
    }
}
