import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../../../../common/movie';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent {
  recommendations: Array<Movie> = [];
  currentRecMovie!: Movie;
  currentRecIdx = 0; // the index of the current movie recommendation
  currentMoviePosterPath: string = "";
  statusCode: number = 200;

  constructor(private movieService: MovieService,
              private router: Router) {
    this.loadMovieRecommendations();
  }

  loadMovieRecommendations() {
    this.recommendations = this.movieService.getMovieRecommendations();
    this.statusCode = this.movieService.getStatusCode();
    if (this.recommendations && this.recommendations.length > 0) {
      this.currentRecMovie = this.recommendations[0];
      this.getMoviePoster();
    }
  }

  showNextRecommendation() {
    this.currentRecIdx++;
    this.currentRecMovie = this.recommendations[this.currentRecIdx]
    this.getMoviePoster();
  }

  getMoviePoster() {
    this.movieService.getTMDBDetails(this.currentRecMovie).pipe(
      switchMap(res => this.movieService.getMoviePosterLink(res.results[0].poster_path))
    ).subscribe(
        res => {
          if (res.url) {
            this.currentMoviePosterPath = res.url;
          }
        },
        err => {
          // Sometimes a strange error concerning unexpected characters occurs, but the movie poster information
          // is returned all the same. For now, we ignore this error and give value to currentMoviePosterPath
          if (err.url) {
            this.currentMoviePosterPath = err.url;
          }
        }
    )
  }

  redirectToHomepage() {
    this.router.navigate(['/']);
  }
}
