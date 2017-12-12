import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})
export class DetailComponent {
  @Input() movie;
  flag = true;
}
