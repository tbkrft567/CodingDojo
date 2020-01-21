import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexAuthorsComponent } from './index/index.component'
import { NewAuthorsComponent } from './new/new.component'
import { EditAuthorsComponent } from './edit/edit.component'
import { IndexQuotesComponent } from './quotes/index/index.component'
import { NewQuotesComponent } from './quotes/new/new.component'


const routes: Routes = [
  { path: '', component: IndexAuthorsComponent},
  { path: 'authors/new', component: NewAuthorsComponent},
  { path: 'authors/edit/:id', component: EditAuthorsComponent},
  { path: 'quotes/:authorId', component: IndexQuotesComponent},
  { path: 'quotes/:authorId/new', component: NewQuotesComponent},
  { path: '**', component: IndexAuthorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
