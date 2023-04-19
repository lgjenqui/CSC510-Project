import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { MovieUpdateComponent } from './movie-update.component';
import { MovieService } from 'src/app/mock_data/mock-movie-service';

describe('MovieUpdateComponent', () => {
let component: MovieUpdateComponent;
let fixture: ComponentFixture<MovieUpdateComponent>;
let movieService: MovieService;

beforeEach(async () => {
await TestBed.configureTestingModule({
declarations: [ MovieUpdateComponent ],
imports: [ HttpClientTestingModule ],
providers: [ FormBuilder, MovieService ]
})
.compileComponents();
});

beforeEach(() => {
fixture = TestBed.createComponent(MovieUpdateComponent);
component = fixture.componentInstance;
movieService = TestBed.inject(MovieService);
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});

it('should initialize updateSucceeded to false', () => {
expect(component.updateSucceeded).toBeFalse();
});

it('should initialize updateFailed to false', () => {
expect(component.updateFailed).toBeFalse();
});

it('should initialize infoIsCorrect to true', () => {
expect(component.infoIsCorrect).toBeTrue();
});

it('should initialize loading to false', () => {
expect(component.loading).toBeFalse();
});

// it('should set updateSucceeded to true on successful update', () => {
// spyOn(movieService, 'updateMovie').and.returnValue(of ({ subscribe: (callback: any) => callback({ status: 200 }) }));
// component.onSubmit();
// expect(component.updateSucceeded).toBeTrue();
// });

it('should set updateFailed to true on failed update', () => {
spyOn(movieService, 'updateMovie').and.returnValue(of({ subscribe: (callback: any) => callback({ status: 500 }) }));
component.onSubmit();
expect(component.updateFailed).toBeTrue();
});

// it('should set infoIsCorrect to false and updateFailed to true on input validation failure', () => {
// spyOn(movieService, 'updateMovie').and.callFake(() => {});
// component.movieUpdateForm.patchValue({
// title: 'Test Title',
// genre: 'Test Genre',
// runtime: 90,
// mpaa_rating: 'PG-13',
// release_year: 2022,
// imdb_rating: 11, // invalid value
// critics_score: 80,
// director: 'Test Director',
// actor1: 'Test Actor 1',
// actor2: 'Test Actor 2',
// actor3: 'Test Actor 3'
// });
// component.onSubmit();
// expect(component.infoIsCorrect).toBeFalse();
// expect(component.updateFailed).toBeTrue();
// });

it('should set updateFailed to true on server error', () => {
spyOn(movieService, 'updateMovie').and.returnValue(of({ subscribe: (callback: any, errorCallback: any) => errorCallback({ status: 422 }) }));
component.onSubmit();
expect(component.updateFailed).toBeTrue();
});

it('should set loading to false after request completes', () => {
spyOn(movieService, 'updateMovie').and.returnValue(of({ subscribe: (callback: any) => callback({ status: 200 }) }));
component.onSubmit();
expect(component.loading).toBeFalse();
});
});