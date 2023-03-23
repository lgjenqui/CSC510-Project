import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
                private router: Router) {
        this.formPage = 0; // indicates no form page should be shown
    }

    /** Hides the currently visible form page (if there is one) and shows the next */
    showNextFormPage(): void {
        this.formPage++;
        console.log(this.movieRecForm.value)
    }

    /** Hides the currently visible form page (if there is one) and shows the next */
    showLastFormPage(): void {
        this.formPage--;
        console.log(this.movieRecForm.value)
    }

    /** Submits the form info */
    onSubmit(): void {
        this.formPage++;

        // A temporary sleep for 4s before navigation to show the loading animation
        setTimeout(() => 
        {
            this.router.navigate(['/recommendation/morbius']);
            console.log('done')
        },
        3000);
    }
}
