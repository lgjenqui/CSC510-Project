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