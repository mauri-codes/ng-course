import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";

import { MoviesService } from "../../../services/movies.service";

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})
export class DetailComponent implements OnChanges{
  movie;
  @Input() id;
  @Output() flagOutput= new EventEmitter();
  constructor ( private movieService: MoviesService) {}
  flag = true;
  loadstart() {
    this.flag = false;
    this.flagOutput.emit(this.flag);
  }
  loadfinish() {
    this.flag = true;
    this.flagOutput.emit(this.flag);
  }
  ngOnChanges () {
    this.movieService
      .getMovie(this.id)
      .subscribe( movie => {
        this.movie = movie;
      });
  }
}

