import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  message: string;
}
@Component({
  selector: 'app-error-dailog',
  templateUrl: './error-dailog.component.html',
  styleUrls: ['./error-dailog.component.scss']
})
export class ErrorDailogComponent implements OnInit {

  message!: string;
  
    constructor(
    public dialogRef: MatDialogRef<ErrorDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.message=data.message;
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }


}
