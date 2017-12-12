import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from "./view/admin/admin.component";
import { DetailComponent } from "./view/admin/detail/detail.component";

import { MoviesService } from "./services/movies.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
