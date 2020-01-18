import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component'
import { NewComponent } from './new/new.component'
import { EditComponent } from './edit/edit.component'


const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'new', component: NewComponent},
  { path: 'authors/edit/:id', component: EditComponent},
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
