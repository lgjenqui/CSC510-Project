import { Movie } from '../common/movie';
import {  parse } from 'csv-parse';
import * as path from "path";
import * as fs from "fs";

export class MovieRepository {
  movies: Movie[] = [];

  populateMoviesRepositoryFromCSV() {
    const csvFilePath = path.resolve(__dirname, '../data/movies.csv');
    
    const headers = ['title', 'genre', 'runtime', 'mpaa_rating', 'release_year', 
    'imdb_rating', 'critics_score', 'director', 'actor1', 'actor2', 'actor3', 
    'actor4', 'actor5'];
    
    const fileContent = fs.readFileSync(csvFilePath, {encoding: 'utf-8'});
    
    parse(fileContent, {
		delimiter: ',',
		columns: headers,
	}, (error, result:Movie[]) => {
		if (error) {
			console.error(error);
		}
		for (var i = 1; i < result.length; i++) {
			this.add(result[i]);
		}
	});
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
      if (mpaa_rating == "none") {
        return movie.release_year >= start_release_year &&
        movie.release_year <= last_release_year &&
        genres.includes(movie.genre);
      }
      return movie.mpaa_rating == mpaa_rating &&
        movie.release_year >= start_release_year &&
        movie.release_year <= last_release_year &&
        genres.includes(movie.genre);
    });
    return returnMovies;
  }
}