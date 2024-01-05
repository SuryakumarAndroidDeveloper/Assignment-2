import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ManagebookComponent } from './managebook/managebook.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { UpdateBookComponent } from './update-book/update-book.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent,
      
    },
    {
        path:'addbook',
        component:AddbookComponent
    },
    {
        path:'managebook',
        component:ManagebookComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'view-detail/:id', component: ViewDetailsComponent },
    { path: 'update-book/:id', component: UpdateBookComponent }, 
];
