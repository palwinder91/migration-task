import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';


@Component({
    selector: 'root',
    templateUrl: '',
    styleUrls: ['']
  })
  export class AppComponent {
    title = '';
  
    constructor(public dialog: MatDialog) { }
  
    openModal() {
      const dialogConfig = new MatDialogConfig();
  
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
          title: 'Request for extension',
          message:'Getting extension will allow one more week to submit and get assessed this task'
      };
  
      const dialogRef = this.dialog.open(ConfirmationModal, dialogConfig);
  
      dialogRef.afterClosed().subscribe(result => {
        alert("response: " + result)
      });
    }
  }
  

@Component({
  selector: 'app-my-dialog',
  templateUrl: './confirmation-modal.html',
  styleUrls: ['./confirmation-modal.scss']
})
export class ConfirmationModal  {
    title: string;
    message: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title;
    this.message = data.message;

    console.log(data)
  }

}
