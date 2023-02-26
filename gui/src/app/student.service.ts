import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { Student } from '../../../common/student';

@Injectable()
export class StudentService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  create(student: Student): Observable<Student|null> {
     return this.http.post<any>(this.taURL + "/student", student, {headers: this.headers})
              .pipe( 
                 retry(2),
                 map( res => {if (res.success) {return student;} else {return null;}} )
               ); 
  }

  update(student: Student): Observable<Student|null> {
     return this.http.put<any>(this.taURL + "/student",JSON.stringify(student), {headers: this.headers})
               .pipe( 
                  retry(2),
                  map( res => {if (res.success) {return student;} else {return null;}} )
               ); 
  }

  getStudents(): Observable<Student[]> {
     return this.http.get<Student[]>(this.taURL + "/students")
               .pipe(
                  retry(2)
               );
  }
  
}