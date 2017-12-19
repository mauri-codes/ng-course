import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";
import { MoviesService } from "../../../services/movies.service";
import { Movie } from "../../../app.models";

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})
export class DetailComponent implements OnChanges {
  movie: Movie;
  @Input() movieId;
  @Input() buttons: boolean;
  @Output() flagOutput= new EventEmitter();
  @Output() deleteElement = new EventEmitter();
  flag = true;
  constructor(private movieService: MoviesService) {
    this.movie = <Movie>{};
  }
  loadstart() {
    this.flag = false;
    this.flagOutput.emit(this.flag);
  }
  loadfinish() {
    this.flag = true;
    this.flagOutput.emit(this.flag);
  }
  deleteMovie (movieId) {
    this.deleteElement.emit(movieId);
  }
  ngOnChanges () {
      this.movieService.getMovie(this.movieId).subscribe(
        movie => this.movie = movie
      );
  }
}

