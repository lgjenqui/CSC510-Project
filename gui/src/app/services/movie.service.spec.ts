import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './movie.service';
import { Movie } from '../../../../common/movie';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MovieService]
    });
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all movies', (done: DoneFn) => {
    service.getAllMovies().subscribe(movies => {
      expect(movies.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should set movie recommendations', (done: DoneFn) => {
    const movieReqString = 'some movie request string';
    service.setMovieRecommendations(movieReqString);
    expect(service.getMovieRecommendations()).toEqual([]);
    expect(service.getStatusCode()).toEqual(-1);
    setTimeout(() => {
      expect(service.getMovieRecommendations().length).toBeGreaterThan(0);
      expect(service.getStatusCode()).toEqual(200);
      done();
    }, 500);
  });

  it('should get movie poster link', (done: DoneFn) => {
    const imgId = 'some image id';
    service.getMoviePosterLink(imgId).subscribe(data => {
      expect(data).toBeTruthy();
      done();
    });
  });

  it('should get TMDB details', (done: DoneFn) => {
    const movie = new Movie();
    movie.title = 'Some movie title';
    service.getTMDBDetails(movie).subscribe(data => {
      expect(data).toBeTruthy();
      done();
    });
  });
  
  

  it('should update movie', (done: DoneFn) => {
    const body = 'some movie update body';
    service.updateMovie(body).subscribe(response => {
      expect(response).toBeTruthy();
      done();
    });
  });

  it('should find movies', (done: DoneFn) => {
    const body = 'some movie search body';
    service.findMovies(body).subscribe(response => {
      expect(response).toBeTruthy();
      done();
    });
  });
});

