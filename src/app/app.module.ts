import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from "./admin/admin.component";
import { DetailComponent } from "./admin/detail/detail.component";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
