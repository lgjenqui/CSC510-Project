import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';

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
        movieAge: '',
        mpaaRating: [],
    })

    constructor(private formBuilder: FormBuilder) {
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

    }
}
