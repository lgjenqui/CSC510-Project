import express = require('express');

import bodyParser = require("body-parser");

import { Movie } from '../common/movie';
import { MovieRepository } from './movierepository';

var taserver = express();
var movieRepo: MovieRepository = new MovieRepository();
movieRepo.populateMoviesRepositoryFromCSV();

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
taserver.get('/movies', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(movieRepo.getAllMovies()));
})

taserver.post('/recmovies', function (req: express.Request, res: express.Response) {
  var occasion = req.body.occasion;
  var emotion = req.body.emotion;
  var mpaa_rating = req.body.rating;
  var start_release_year = req.body.start_release_year;
  var last_release_year = req.body.last_release_year;

  var genre: String[] = movieRepo.getGenre(occasion, emotion);
  var movies: Movie[] = movieRepo.getFilteredMovies(genre, mpaa_rating, start_release_year, last_release_year)
  res.send(JSON.stringify(movies));

})

taserver.use(allowCrossDomain);

taserver.use(bodyParser.json());

taserver.listen(3000, function () {
  console.log('Server listening on port 3000!')
})