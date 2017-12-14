import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Movie } from "../app.models";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MoviesService {
  url = 'http://localhost:3000/movies'
  movies: Movie[];
  constructor( private http: HttpClient) {}
  getMovies(): Observable <Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }
  getMovie( id ): Observable<Movie> {
    return this.http.get<Movie>(this.url + '/' + id);
  }
}
