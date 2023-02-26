import { Component, OnInit } from '@angular/core';

import { Student } from '../../../common/student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {

  student: Student = new Student();
  students: Student[] = [];
  duplicateID: boolean = false;

  constructor(private studentService: StudentService) {}

  createStudent(s: Student): void {
    this.studentService.create(s)
           .subscribe(
              ar => {
                if (ar) {
                  this.students.push(ar);
                  this.student = new Student();
                } else {
                  this.duplicateID = true;
                } 
              },
              msg => { alert(msg.message); }
           );
  } 

  onMove(): void {
    this.duplicateID = false;
  }

  ngOnInit(): void {
    this.studentService.getStudents()
      .subscribe(
        as => { this.students = as; },
        msg => { alert(msg.message); }
      );
  }

} 