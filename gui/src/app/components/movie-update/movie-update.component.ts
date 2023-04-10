import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent {
  movieUpdateForm = this.formBuilder.group({
    title: '',
    genre: '', 
    runtime: null, 
    mpaa_rating: '',
    release_year: null,
    imdb_rating: null,
    critics_score: null,
    director: '',
    actor1: '',
    actor2: '',
    actor3: ''
  })

  updateSucceeded: boolean;
  updateFailed: boolean;
  infoIsCorrect: boolean;
  loading: boolean; // indicates whether a request is being completed at this time

  constructor(private formBuilder: FormBuilder,
              private movieService: MovieService) {
    this.updateSucceeded = false;
    this.updateFailed = false;
    this.infoIsCorrect = true;
    this.loading = false;
  }

  onSubmit() {
    // Reset the booleans tracking the success and failure of the request
    this.updateSucceeded = false;
    this.updateFailed = false;
    this.infoIsCorrect = true;
    this.loading = true;

    // Make the request to the movie service and update the booleans appropriately
    this.movieService.updateMovie(JSON.stringify(this.movieUpdateForm.value)).subscribe(
      res => {
        if (res.status == 200) {
          this.updateSucceeded = true;
        } else {
          this.updateFailed = true;
          if (res.status == 206) {
            this.infoIsCorrect = false;
          }
        }
        this.loading = false;
      },
      (err) => {
        this.updateFailed = true;
        this.loading = false;
      })
  }
}
