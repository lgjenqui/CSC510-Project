import { Movie } from '../common/movie';

export class MovieRepository {
  movies: Movie[] = [];

  populateMoviesRepositoryFromCSV() {
    // TODO: Populate repository from CSV
  }
  getGenre(occasion: String, emotion: String): String[] {
    var returnGenre: string[] = [];
    if (occasion == "Date Night" && emotion == "Happy") {
      returnGenre.push("Comedy");
      return returnGenre;
    }
    else if (occasion == "Date Night" && emotion == "Neutral") {
      returnGenre.push("Drama");
      return returnGenre;
    }
    else if (occasion == "Date Night" && emotion == "Sad") {
      returnGenre.push("Animation");
      return returnGenre;
    }
    else if (occasion == "Family Movie Night" && emotion == "Happy") {
      returnGenre.push("Animation");
      return returnGenre;
    }
    else if (occasion == "Family Movie Night" && emotion == "Neutral") {
      returnGenre.push("Comedy");
      return returnGenre;
    }
    else if (occasion == "Family Movie Night" && emotion == "Sad") {
      returnGenre.push("Comedy");
      return returnGenre;
    }
    else if (occasion == "Movie With Friends" && emotion == "Happy") {
      returnGenre.push("Action");
      returnGenre.push("Adventure");
      returnGenre.push("Sci-Fi");
      return returnGenre;
    }
    else if (occasion == "Movie With Friends" && emotion == "Neutral") {
      returnGenre.push("Mystery");
      returnGenre.push("Suspense");
      return returnGenre;
    }
    else if (occasion == "Movie With Friends" && emotion == "Sad") {
      returnGenre.push("Horror");
      return returnGenre;
    }
    else if (occasion == "Bored and Alone" && emotion == "Happy") {
      returnGenre.push("Action");
      returnGenre.push("Adventure");
      returnGenre.push("Sci-Fi");
      return returnGenre;
    }
    else if (occasion == "Bored and Alone" && emotion == "Neutral") {
      returnGenre.push("Documentary");
      returnGenre.push("Drama");
      return returnGenre;
    }
    else if (occasion == "Bored and Alone" && emotion == "Sad") {
      returnGenre.push("Animation");
      returnGenre.push("Comedy");
      return returnGenre;
    }

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