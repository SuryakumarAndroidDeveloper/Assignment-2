import { CommonModule ,Location} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../Services/book.service';
import { switchMap } from 'rxjs/operators';
import { Book } from '../Services/book';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  book: Book = new Book();
  constructor(private route: ActivatedRoute,
      private bookService: BookService,
      private location: Location) { }
  ngOnInit(): void {
      this.route.params.pipe(
          switchMap((params: Params) => this.bookService.getBook(+params['id']))
      ).subscribe(book => {
        if (book !== undefined) {
          this.book = book; // Handle the case where 'book' is defined
        } else {
          // Handle the case where 'book' is undefined
          // For example, set a default value or handle the absence of the book
        }
      })
  }
  goBack(): void {
      this.location.back();
  }
}

