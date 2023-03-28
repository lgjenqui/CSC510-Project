import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Movie } from '../../../../common/movie';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
    // The base of the URL of our backend API endpoints
    baseUrl = "http://localhost:3000/"

    // The current list of recommended movies
    recommendedMovies: Array<Movie> = [];

    constructor(private http: HttpClient) {
    }

    getAllMovies(): Observable<Array<Movie>> {
        return this.http.get<Array<Movie>>(this.baseUrl + "movies"); 
    }

    getMovieRecommendations(movie: Movie): Observable<Array<Movie>> {
        return this.http.post<Array<Movie>>(this.baseUrl + "recmovies", movie);
    }
}
