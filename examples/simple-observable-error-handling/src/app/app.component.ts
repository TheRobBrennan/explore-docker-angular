import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';
import { of, throwError, timer, Observable } from 'rxjs';
import { catchError, finalize, tap, retryWhen, delayWhen  } from 'rxjs/operators';  // Available in Angular 6 or higher

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'simple-observable-error-handling';
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    const studentsObservable = this.studentService.getStudents();

    // Example 1 - Happy path where subscribe executes without an error handling callback
    this.example1(studentsObservable); // If there is an error, what happens?

    // Example 2 - Specify an error handling callback on the observer
    // this.example2(studentsObservable);

    // Example 3 - Use the catch and replace strategy when handling an error
    // this.example3(studentsObservable);

    // Example 4 - Use the catch and rethrow strategy
    // this.example4(studentsObservable);

    // Example 5 - What about catching, rethrowing, AND providing a fallback value if something goes wrong?
    // this.example5(studentsObservable);

    // Example 5a - Optionally add finalize calls to ensure resources are released correctly.
    // this.example5a(studentsObservable);

    // Example 6 - Indefinite retry every two (2) seconds
    // this.example6(studentsObservable);
  }

  /*
    Special thanks to RxJs Error Handling: Complete Practical Guide
    https://blog.angular-university.io/rxjs-error-handling/ for offering scenarios that
    should be considered when subscribing to Observables.
  */

  // Example 1 - Happy path where subscribe executes without an error and we receive data
  example1(studentsObservable: Observable<Student[]>) {
    // Oh snap! If an error occurs, our observer does not account for it and continues on in a potentially unsafe manner
    studentsObservable.subscribe((studentsData: Student[]) => {
      console.log(`Successfully received ${studentsData.length} student(s)`);
      this.students = studentsData;
    });
  }

  // Example 2 - Specify an error handling callback on the observer
  example2(studentsObservable: Observable<Student[]>) {
    studentsObservable.subscribe({
      next(studentsData) {
        console.log(`Successfully received ${studentsData.length} student(s)`);
        this.students = studentsData;
      },
      // Enable the following code to handle an error within our observer
      error(err) {
        console.log(`Whoops! Let's handle error "${err}" in our observer`);
      }
    });
  }

  // Example 3 - Use the catch and replace strategy when handling an error
  example3(studentsObservable: Observable<Student[]>) {
    studentsObservable
      .pipe(catchError(err => of([])))  // If there is an error, catch it and return an empty array instead
      .subscribe((studentsData: Student[]) => {
        console.log(`Successfully received ${studentsData.length} student(s)`);
        this.students = studentsData;
      });
  }

  // Example 4 - Use the catch and rethrow strategy
  example4(studentsObservable: Observable<Student[]>) {
    studentsObservable
      .pipe(catchError(err => {
        console.log(`Handling "${err}" and rethrowing so our error handling callback can process it further`);
        return throwError(err);
      }))
      .subscribe(
        (studentsData: Student[]) => {
          console.log(`Successfully received ${studentsData.length} student(s)`);
          this.students = studentsData;
        },
        (err) => {
          console.log(`Handling "${err}" in our error handling callback`);
        },
        () => {
          console.log(`Observable has completed`);
        }
      );
  }

  // Example 5 - What about catching, rethrowing, AND providing a fallback value if something goes wrong?
  example5(studentsObservable: Observable<Student[]>) {
    studentsObservable
      .pipe(
        catchError(err => {
          console.log(`Handling "${err}" and rethrowing just for demonstration purposes only. Do not do this in production 🤓`);
          return throwError(err);
        }),
        catchError(err => {
          console.log(`Caught rethrown error "${err}"; providing fallback value`);
          return of([]);
        }))
      .subscribe(
        (studentsData: Student[]) => {
          console.log(`Successfully received ${studentsData.length} student(s)`);
          this.students = studentsData;
        },
        (err) => {
          // Check it out - this doesn't get called. We correctly handled the rethrown error with the second catchError function 🤓
          console.log(`Handling "${err}" in our error handling callback...or are we?`);
        },
        () => {
          console.log(`Observable has completed`);
        }
      );
  }

  // Example 5a - Optionally add finalize calls to ensure resources are released correctly.
  example5a(studentsObservable: Observable<Student[]>) {
    studentsObservable
      .pipe(
        catchError(err => {
          console.log(`Handling "${err}" and rethrowing just for demonstration purposes only. Do not do this in production 🤓`);
          return throwError(err);
        }),
        finalize(() => {
          console.log(`First finalize() block`);
        }),
        catchError(err => {
          console.log(`Caught rethrown error "${err}"; providing fallback value`);
          return of([]);
        }),
        finalize(() => {
          // This finalize block is executed once the Observable has completed
          console.log(`Second finalize() block`);
        }))
      .subscribe(
        (studentsData: Student[]) => {
          console.log(`Successfully received ${studentsData.length} student(s)`);
          this.students = studentsData;
        },
        (err) => {
          // Check it out - this doesn't get called. We correctly handled the rethrown error with the second catchError function 🤓
          console.log(`Handling "${err}" in our error handling callback...or are we?`);
        },
        () => {
          console.log(`Observable has completed`);
        }
      );
  }

  // Example 6 - Indefinite retry every two (2) seconds
  example6(studentsObservable: Observable<Student[]>) {
    studentsObservable
      .pipe(
        tap(() => console.log(`Initiating request`)),
        retryWhen(errors => {
          return errors.pipe(
            tap(() => console.log(`Error occurred; will retry in two (2) seconds`)),
            delayWhen(() => timer(2000)),
            // BEWARE! This will keep on retrying indefinitely as is! Look at your console.
            tap(() => console.log(`Retrying...`))
          );
        })
      )
      .subscribe(
        (studentsData: Student[]) => {
          console.log(`Successfully received ${studentsData.length} student(s)`);
          this.students = studentsData;
        },
        (err) => {
          console.log(`Handling "${err}" in our error handling callback...or are we?`);
        },
        () => {
          console.log(`Observable has completed`);
        }
      );
  }
}
