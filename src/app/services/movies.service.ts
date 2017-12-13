import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Movie } from "../app.models";

@Injectable()
export class MoviesService {
  movies: Movie[];
  getMovies(): Observable <Movie[]> {
    return of(this.movies);
  }
  getMovie( index ): Observable <Movie> {
    const movie: Movie = this.movies[index];
    return of(movie);
  }
  constructor() {
    this.movies = [
      {
        "id": 1,
        "title": "terminator 2 el juicio final",
        "image": "http://realorfake4k.com/wp-content/uploads/2017/08/terminator-2-judgement-day-4k-uhd-main.jpg",
        "year": 1991,
        "genre": "Fantasia|Ciencia Ficcion",
        "available": "DVD,Blue Ray,online",
        "status": "Disponible,Disponible,Disponible",
        "price": 12
      },
      {
        "id": 2,
        "title": "gladiador",
        "image": "https://i.ytimg.com/vi/4p4vui7T8xw/hqdefault.jpg",
        "year": 2000,
        "genre": "Drama|Accion",
        "available": "DVD,Blue Ray,online",
        "status": "Disponible,Solo en Tienda,Solo Tarjeta",
        "price": 15
      },
      {
        "id": 3,
        "title": "el caballero oscuro, la leyenda renace",
        "image": "http://es.web.img3.acsta.net/c_300_300/medias/nmedia/18/86/86/43/20123634.jpg",
        "year": 2012,
        "genre": "Thriller|Accion",
        "available": "DVD,Blue Ray,online",
        "status": "Solo a domicilio,Solo en Tienda,Disponible",
        "price": 10
      },
      {
        "id": 4,
        "image": "http://es.web.img2.acsta.net/c_300_300/pictures/14/05/27/12/07/438875.jpg",
        "title": "el pianista",
        "year": 2002,
        "genre": "Drama|History",
        "available": "DVD",
        "status": "Disponible",
        "price": 21
      },
      {
        "id": 5,
        "image": "https://i.ytimg.com/vi/YEuN7KTpLKY/hqdefault.jpg",
        "title": "la milla verde",
        "year": 1999,
        "genre": "Fantasia|Crimen",
        "available": "DVD,online",
        "status": "Solo en Tienda,Solo a Domicilio",
        "price": 13
      },
      {
        "id": 6,
        "image": "https://static.rogerebert.com/uploads/movie/movie_poster/psycho-1960/large_qodLPeeuhzSiiWkuldSrlCQGpkz.jpg",
        "title": "psicosis",
        "year": 1960,
        "genre": "Thriller",
        "available": "DVD,Blue Ray,online",
        "status": "Disponible,Disponible,Disponible",
        "price": 17
      },
      {
        "id": 7,
        "image": "http://www.phenomena-experience.com/galeria/Historico_peliculas/E/en-busca-del-arca-perdida.jpg",
        "title": "en busca del arca perdida",
        "year": 1981,
        "genre": "Fantasia|Accion",
        "available": "DVD,Blue Ray,online",
        "status": "Solo en Tienda,Disponible,Solo Tarjeta",
        "price": 11
      },
      {
        "id": 8,
        "image": "http://es.web.img3.acsta.net/c_300_300/medias/nmedia/18/90/00/32/20076425.jpg",
        "title": "salvando al soldado Ryan",
        "year": 1998,
        "genre": "Drama|Accion",
        "available": "online",
        "status": "Disponible",
        "price": 12
      },
      {
        "id": 9,
        "image": "https://trumanintheworlden.files.wordpress.com/2012/05/intocable.jpg",
        "title": "intocable",
        "year": 2011,
        "genre": "Drama|Comedia",
        "available": "Blue Ray",
        "status": "Solo a Domicilio",
        "price": 12
      },
      {
        "id": 10,
        "image": "https://i.ytimg.com/vi/rTJG5ciCvJ0/hqdefault.jpg",
        "title": "el profesional",
        "year": 1994,
        "genre": "Crimen|Thriller",
        "available": "DVD,Blue Ray,online",
        "status": "Disponible,Solo a Domicilio,Disponible",
        "price": 15
      },
      {
        "id": 11,
        "image": "https://i.ytimg.com/vi/xsQ2HoaAeiI/hqdefault.jpg",
        "title": "la vida es bella",
        "year": 1997,
        "genre": "Comedia|Drama",
        "available": "online",
        "status": "Disponible",
        "price": 8
      },
      {
        "id": 12,
        "image": "http://ksassets.timeincuk.net/wp/uploads/sites/55/2017/03/matrix_reboot_1000-630x400-1.jpg",
        "title": "matrix",
        "year": 1999,
        "genre": "Fantasia|Ciencia Ficcion",
        "available": "DVD,Blue Ray,online",
        "status": "Disponible,Disponible,Disponible",
        "price": 13
      }
    ];
  }
}
