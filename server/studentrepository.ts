import { Student } from '../common/student';

export class StudentRepository {
  students: Student[] = [];

  add(student: Student): Student {
    var result = null;
    if (this.idAvailable(student.id)) {
      result = new Student();
      result.copyFrom(student);
      this.students.push(result);
    }
    return result;
  }

  idAvailable(id: string): boolean {
    return !this.students.find(a => a.id == id);
  }

  update(student: Student): Student {
    var result: Student = this.students.find(a => a.id == student.id);
    if (result) result.copyFrom(student);
    return result;
  }

  getStudents(): Student[] {
    return this.students;
  }
}