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
taserver.use(allowCrossDomain);
taserver.use(bodyParser.json());

taserver.get('/movies', function (req: express.Request, res: express.Response) {

  res.send(JSON.stringify(movieRepo.getAllMovies()));

})

taserver.post('/recmovies', function (req: express.Request, res: express.Response) {
  console.log(req.body)

  var emotion = req.body.emotion;
  var occasion = req.body.occasion;
  var mpaa_rating = req.body.mpaa_rating;
  var start_release_year = req.body.start_release_year;
  var last_release_year = req.body.last_release_year;

  // Check if a start and last release year are provided - if not, set them to 0 and 9999 respectively
  if (start_release_year == null) {
    start_release_year = 0;
  }

  if (last_release_year == null) {
    last_release_year = 9999;
  }

  var genre: String[] = movieRepo.getGenre(occasion, emotion);
  var movies: Movie[] = movieRepo.getFilteredMovies(genre, mpaa_rating, start_release_year, last_release_year)
  res.send(JSON.stringify(movies));
})


taserver.listen(3000, function () {
    console.log('Server listening on port 3000!')
})
