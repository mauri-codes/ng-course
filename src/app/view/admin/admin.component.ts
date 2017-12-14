import { Component } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { Movie } from "../../app.models";

@Component({
  selector: "app-admin",
  styleUrls: ["admin.component.scss"],
  templateUrl: "admin.component.html"
})
export class AdminComponent {
  title = "Pagina de administrador";
  index = -1;
  flag = false;
  movies: Movie[];
  constructor(
    private movieService: MoviesService
  ) {
    movieService.getMovies().subscribe(
      movies => {
        this.movies = movies;
        this.index = 0;
      }
    );
  }
  deleteMovie(id) {
    this.movies.splice((id - 1), 1);
    this.index = this.index + 1;
  }
}
