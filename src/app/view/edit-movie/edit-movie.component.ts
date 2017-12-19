import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from "../../services/movies.service";
import {Movie} from "../../app.models";

@Component({
  selector: 'app-edit',
  templateUrl: 'edit-movie.component.html'
})
export class EditMovieComponent implements OnInit {
  movie: Movie;
  id;
  constructor( private movieService: MoviesService,
               private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit () {
    this.movieService.getMovie(this.id).subscribe(movie => {
      this.movie = movie;
    });
  }
}
