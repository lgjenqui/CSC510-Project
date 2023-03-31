import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../../../../common/movie';
import { Observable } from 'rxjs';

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

    getNewMovieRecommendations(body: string): Observable<Array<Movie>> {
        console.log(body)

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this.http.post<Array<Movie>>(this.baseUrl + "recmovies", body, httpOptions);
    }

    setMovieRecommendations(movieReqString: string) {
        this.getNewMovieRecommendations(movieReqString).subscribe(
            returnedMovies => {
                this.recommendedMovies = returnedMovies;
                console.log(this.recommendedMovies)
            }
        )
    }

    getMovieRecommendations(): Array<Movie> {
        return this.recommendedMovies;
    }
}
