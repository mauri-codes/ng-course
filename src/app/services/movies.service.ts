import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Movie } from "../app.models";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class MoviesService {
  movieUrl = 'http://localhost:3000/movies';
  getMovies(): Observable <Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl);
  }
  getMovie( id ): Observable <Movie> {
    return this.http.get<Movie>(this.movieUrl + '/' + id);
  }
  deleteMovie (id) {
    this.http.delete(this.movieUrl + '/' + id)
      .subscribe(movie => {});
  }
  updateMovie ( movie, id ) {
    this.http.put(this.movieUrl + '/' + id, movie).subscribe();
  }
  constructor(private http: HttpClient) {}
}
