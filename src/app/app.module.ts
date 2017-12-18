import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { AdminComponent } from "./view/admin/admin.component";
import { DetailComponent } from "./view/admin/detail/detail.component";
import { MoviesComponent } from "./view/movies/movies.component";
import { UsersComponent } from "./view/users/users.component";
import { LandingComponent } from "./view/landing/landing.component";

import { MoviesService } from "./services/movies.service";

import { SeparatorPipe } from "./pipes/separator.pipe";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DetailComponent,
    MoviesComponent,
    UsersComponent,
    LandingComponent,
    SeparatorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
