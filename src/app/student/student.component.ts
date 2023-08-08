import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  Mark: number=0;

  students: any[] = [
    { name: 'Name 1', email: 'email@gmail.com', Mark: 55 },
    { name: 'Name 2', email: 'Email2@gmail.com', Mark: 30 },
     { name: 'Name 3', email: 'Email2@gmail.com', Mark: 30 },
      { name: 'Name 4', email: 'Email2@gmail.com', Mark: 50 },
    // Add more students if needed
  ];
getMarkColor(Mark: number): string{
  return Mark < 50 ? 'red-text' : 'green-text';
}

getPassFailStatus(Mark: number): string {
  return Mark > 50 ? 'PASS' : 'FAIL';
    
  }

}

