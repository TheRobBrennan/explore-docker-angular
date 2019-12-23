import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-confirmation-dialog';
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogConfig = {
      width: '350px',
      data: 'Do you confirm the deletion of this data?'
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        // DO SOMETHING
      }
    });
  }
}
