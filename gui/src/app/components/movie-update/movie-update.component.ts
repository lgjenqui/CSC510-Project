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
    movieTitle: '',
    directorName: '',
    actor1: '',
    actor2: '',
    actor3: '',
    mpaa_rating: '',
    releaseYear: null, 
    imdbRating: null,
    rottenTomatoesRating: null
  })

  constructor(private formBuilder: FormBuilder,
              private movieService: MovieService) {
  }

  onSubmit() {
    console.log(this.movieUpdateForm.value);
    // this.movieService.updateMovie(JSON.stringify(this.movieUpdateForm.value))
  }
}
