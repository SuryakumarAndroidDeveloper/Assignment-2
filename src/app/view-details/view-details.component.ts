import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { BookService } from '../Services/book.service';
import { switchMap } from 'rxjs';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../Services/book';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent {
  book: Book = new Book();
    constructor(private route: ActivatedRoute,
        private router: Router,
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
    updateBook(id: number): void {
        this.router.navigate(['/update-book', id]);
    }

}
