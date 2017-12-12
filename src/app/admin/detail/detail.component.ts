import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})
export class DetailComponent {
  @Input() movie;
  @Output() flagOutput= new EventEmitter();
  flag = true;
  loadstart() {
    this.flag = false;
    this.flagOutput.emit(this.flag);
  }
  loadfinish() {
    this.flag = true;
    this.flagOutput.emit(this.flag);
  }
}

