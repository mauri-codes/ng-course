import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./view/admin/admin.component";
import {UsersComponent} from "./view/users/users.component";
import {MoviesComponent} from "./view/movies/movies.component";
import {LandingComponent} from "./view/landing/landing.component";

const routes: Routes = [
  { path: 'admin', component: AdminComponent},
  { path: 'users', component: UsersComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MoviesComponent },
  { path: 'landing', component: LandingComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
