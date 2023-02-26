import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Student } from '../../../common/student';
import { StudentService } from './student.service';

@Component({
  selector: 'goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
  
export class GoalsComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  students: Student[] = [];

  updateStudent(student: Student): void {
     this.studentService.update(student).subscribe(
       (a) => { if (a == null) alert("Unexpected fatal error trying to update student information! Please contact the systems administratos."); },
       (msg) => { alert(msg.message); }
     );
  }

  ngOnInit(): void {
    this.studentService.getStudents()
       .subscribe(
          (as) =>  { this.students = as; },
          (msg) => { alert(msg.message); }
       );
   }

}