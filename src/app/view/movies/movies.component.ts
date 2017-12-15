import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from "../../services/movies.service";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: "app-movies",
  styleUrls: ["movies.component.scss"],
  templateUrl: "movies.component.html"
})
export class MoviesComponent implements OnInit {
  title = "Movies page";
  id;
  movies;
  movie;
  constructor ( private route: ActivatedRoute,
                private movieService: MoviesService,
                private sanitazer: DomSanitizer) {}
  ngOnInit () {
    const stringId = this.route.snapshot.paramMap.get('id');
    this.id = -1;
    if ( stringId != null ) {
      this.id = +stringId;
    }
    if (this.id === -1) {
      this.movieService.getMovies().subscribe(movies => {
        this.movies = movies
        console.log('hi movies');
      });
    } else {
      this.movieService.getMovie(this.id).subscribe(movie => {
        this.movie = movie
        console.log('hello movie');
      });
    }
  }
  cleanURL(oldURL ): SafeUrl {
    return   this.sanitazer.bypassSecurityTrustResourceUrl(oldURL);
  }
}
