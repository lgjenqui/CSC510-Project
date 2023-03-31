import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../../../../common/movie';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent {
  recommendations: Array<Movie> = [];
  currentRecMovie!: Movie;
  currentRecIdx = 0; // the index of the current movie recommendation

  constructor(private movieService: MovieService) {
    this.loadMovieRecommendations();
  }

  loadMovieRecommendations() {
    this.recommendations = this.movieService.getMovieRecommendations();
    this.currentRecMovie = this.recommendations[0];
  }

  showNextRecommendation() {
    this.currentRecIdx++;
    this.currentRecMovie = this.recommendations[this.currentRecIdx]
  }
}
