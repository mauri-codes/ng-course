import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../services/movies.service";
import { DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: "app-movies",
  styleUrls: ["movies.component.scss"],
  templateUrl: "movies.component.html"
})
export class MoviesComponent implements OnInit {
  title = "Movies page";
  id: number;
  movie;
  movies;
  constructor(private route: ActivatedRoute,
              private movieService: MoviesService,
              private sanitazer: DomSanitizer) {}
  ngOnInit() {
    const stringId = this.route.snapshot.paramMap.get('id');
    let id = -1;
    if ( stringId != null) {
      id = +stringId;
      this.getMovie(id);
    } else {
      this.getMovies();
    }
    this.id = id;
  }
  getMovie(id) {
    this.movieService
      .getMovie(id)
      .subscribe(movie => {
        this.movie = movie;
      });
  }
  getMovies() {
    this.movieService
      .getMovies()
      .subscribe(movies => {
        this.movies = movies;
      });
  }
  cleanUrl (url): SafeUrl {
    return this.sanitazer.bypassSecurityTrustResourceUrl(url);
  }
}
