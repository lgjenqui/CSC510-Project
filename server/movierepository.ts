import { Movie } from '../common/movie';

export class MovieRepository {
  movies: Movie[] = [];

  populateMoviesRepositoryFromCSV() {
    // TODO: Populate repository from CSV
  }

  add(movie: Movie): Movie {
    var result: Movie = new Movie();
    result.copyFrom(movie);
    this.movies.push(result);
    return result;
  }

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getFilteredMovies(genres: String[], mpaa_rating: String, 
      start_release_year: number, last_release_year: number): Movie[] {
    var returnMovies: Movie[] = this.movies.filter((movie) => {
      return movie.mpaa_rating == mpaa_rating &&
              movie.release_year >= start_release_year &&
              movie.release_year <= last_release_year &&
              genres.includes(movie.genre);
    });
    return returnMovies;
  }
}