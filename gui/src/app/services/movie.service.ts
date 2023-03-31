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

    // The API key for TMDB - https://www.themoviedb.org/?language=en-US
    tmdbKey = "2412fe1aec5803617df310fa1f021201"

    // The general API endpoint for TMDB movie searches
    tmdbSearchEndpoint = "https://api.themoviedb.org/3/search/movie?api_key="

    // A string for TMDB queries indicating the language should be english and setting up the endpoint to accept query data
    tmdbQueryPreface = "&language=en-US&query="

    // The API endpoint for TMDB movie posters
    tmdbPosterEndpoint = "https://image.tmdb.org/t/p/w500/"

    // The current list of recommended movies
    recommendedMovies: Array<Movie> = [];

    constructor(private http: HttpClient) {
    }

    getAllMovies(): Observable<Array<Movie>> {
        return this.http.get<Array<Movie>>(this.baseUrl + "movies"); 
    }

    getNewMovieRecommendations(body: string): Observable<Array<Movie>> {
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
            }
        )
    }

    getMovieRecommendations(): Array<Movie> {
        return this.recommendedMovies;
    }

    getMoviePosterLink(imgId: string): Observable<any> {
        return this.http.get(this.tmdbPosterEndpoint + imgId);
    }

    getTMDBDetails(movie: Movie): Observable<any> {
        // Construct the api endpoint with the TMDB api key and the movie title
        var endpoint = this.tmdbSearchEndpoint + this.tmdbKey + this.tmdbQueryPreface;
        var titleWords = movie.title.split(" ") // break the title up into its separate words so you can iterate over them
        for (let i = 0; i < titleWords.length; i++) {
            if (i == 0) {
                endpoint += titleWords[i];
            } else {
                endpoint +=  "+" + titleWords[i];
            }
        }

        // Call the newly-constructed endpoint
        return this.http.get(endpoint);
    }
}
