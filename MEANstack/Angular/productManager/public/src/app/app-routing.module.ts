import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { IndexComponent } from './index/index.component'
import { CreateComponent } from './create/create.component'
import { EditComponent } from './edit/edit.component'


const routes: Routes = [
  { path: 'products', component: HomeComponent },
  { path: 'products/index', component: IndexComponent },
  { path: 'products/create', component: CreateComponent },
  { path: 'products/:productId/edit', component: EditComponent },

  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: '**', redirectTo: 'products', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
