import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexAuthorsComponent } from './index-authors/index-authors.component'; 
import { DashboardAuthorComponent } from './index-authors/dashboard-author/dashboard-author.component'; 
import { NewAuthorsComponent } from './index-authors/new-authors/new-authors.component';
import { EditAuthorsComponent } from './index-authors/edit-authors/edit-authors.component';

import { IndexQuotesComponent } from './index-authors/index-quotes/index-quotes.component';
import { NewQuotesComponent } from './index-authors/new-quotes/new-quotes.component';


const routes: Routes = [
  { path: 'authors', component: IndexAuthorsComponent, children: [
    { path: 'dashboard', component: DashboardAuthorComponent},
    { path: 'new', component: NewAuthorsComponent},
    { path: ':authorId/edit', component: EditAuthorsComponent},
    { path: ':authorId/quotes', component: IndexQuotesComponent},
    { path: ':authorId/quotes/new', component: NewQuotesComponent}]
  },

  { path: '', redirectTo: '/authors/dashboard', pathMatch: 'full'},
  { path: '**', redirectTo: '/authors/dashboard', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
