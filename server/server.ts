import express = require('express');

import bodyParser = require("body-parser");

import {Student} from '../common/student';
import {StudentRepository} from './studentrepository';

var taserver = express();
var studentrepo: StudentRepository = new StudentRepository();

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