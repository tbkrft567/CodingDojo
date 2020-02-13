import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowseComponent } from './dashboard/browse/browse.component';
import { MyListComponent } from './dashboard/my-list/my-list.component';


const routes: Routes = [
  { path: '', component: LoginRegComponent },
  { path: 'login', component: LoginRegComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'browse', component: BrowseComponent },
      { path: 'MyList', component: MyListComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
