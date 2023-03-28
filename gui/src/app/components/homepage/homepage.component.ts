import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../../../../common/movie';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
    formPage: number;

    movieRecForm = this.formBuilder.group({
        occasion: '',
        mood: '',
        startingYear: null, 
        endingYear: null,
        mpaaRating: null,
    })

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private movieService: MovieService) {
        this.formPage = 0; // indicates no form page should be shown
    }

    /** Hides the currently visible form page (if there is one) and shows the next */
    showNextFormPage(): void {
        this.formPage++;
    }

    /** Hides the currently visible form page (if there is one) and shows the next */
    showLastFormPage(): void {
        this.formPage--;
    }

    /** Submits the form info */
    onSubmit(): void {
        this.formPage++;

        // A temporary sleep for 4s before navigation to show the loading animation
        // setTimeout(() => 
        // {
        //     this.router.navigate(['/recommendation/morbius']);
        // },
        // 3000);

        // Make a request to the movie service using the form input
        const requestedMovie: Movie = {
            mood = this.movieRecForm.value.mood?,
            occasion = this.
            mpaa_rating = req.body.mpaa_rating;
            start_release_year = req.body.start_release_year;
            last_release_year = req.body.last_release_year;
        }
    }
}
