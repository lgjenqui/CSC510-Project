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

taserver.get('/students', function (req: express.Request, res: express.Response) {
   res.send(JSON.stringify(studentrepo.getStudents()));
})

taserver.post('/student', function (req: express.Request, res: express.Response) {
   var student: Student = <Student> req.body; 
   student = studentrepo.add(student);
   if (student) {
     res.send({"success": "Student successfully registered."});
   } else {
     res.send({"failure": "Student could not be registered."});
   }
})

taserver.put('/student', function (req: express.Request, res: express.Response) {
   var student: Student = <Student> req.body;
   student = studentrepo.update(student);
   if (student) {
     res.send({"success": "Student data successfully updated."});
   } else {
     res.send({"failure": "Student data could not be updated."});
   }
})

taserver.listen(3000, function () {
   console.log('Server listening on port 3000!')
})