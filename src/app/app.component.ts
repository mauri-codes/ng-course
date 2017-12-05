import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  color = 'red';
  side = 300;
  colors = ['yellow', 'red', 'papayawhip', 'black', 'blue'];
  index = 0;
  title_color = 'black';
}
