import express = require('express');

import bodyParser = require("body-parser");

import {Movie} from '../common/movie';
import {MovieRepository} from './movierepository';

var taserver = express();
var movieRepo: MovieRepository = new MovieRepository();
movieRepo.populateMoviesRepositoryFromCSV();

var allowCrossDomain = function(req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
taserver.use(allowCrossDomain);

taserver.use(bodyParser.json());

taserver.listen(3000, function () {
   console.log('Server listening on port 3000!')
})