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
  getMovie( index ): Observable <Movie> {
    return this.http.get<Movie>(this.movieUrl + '/' + index);
  }
  constructor(private http: HttpClient) {}
}
