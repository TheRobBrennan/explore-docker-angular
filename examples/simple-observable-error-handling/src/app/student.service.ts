import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class StudentService {
  // Add some demo data
  students: Student[] = [
    {
      id: 1,
      name: 'Krunal',
      enrollmentnumber: 110470116021,
      college: 'VVP Engineering College',
      university: 'GTU',
    },
    {
      id: 2,
      name: 'Rushabh',
      enrollmentnumber: 110470116023,
      college: 'VVP Engineering College',
      university: 'GTU',
    },
    {
      id: 3,
      name: 'Ankit',
      enrollmentnumber: 110470116022,
      college: 'VVP Engineering College',
      university: 'GTU',
    },
  ];

  constructor() {}

  public getStudents(): any {
    // Create an observable using our demo data as a source
    const studentsObservable = new Observable(observer => {
      // After 1 second, the whole array is published to the subscriber
      setTimeout(() => {
        // Enable the next line if you want to throw an error
        observer.error(`Run for the hills! Something bad happened here.`);

        // Return our data
        observer.next(this.students);
      }, 1000);
    });

    return studentsObservable;
  }
}
