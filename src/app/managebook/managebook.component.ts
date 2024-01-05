import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../Services/book.service';
import { Router } from '@angular/router';
import { Book } from '../Services/book';

@Component({
  selector: 'app-managebook',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './managebook.component.html',
  styleUrl: './managebook.component.css'
})
export class ManagebookComponent {
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
	updateBook(id:number): void {
		this.router.navigate(['/update-book', id]);
	}


}
