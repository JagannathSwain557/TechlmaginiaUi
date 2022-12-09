import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  userName: string;
  password: string;
}
@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './signIn-dailog.component.html',
  styleUrls: ['./signIn-dailog.component.scss']
})
export class SignInDialogComponent implements OnInit {
  userName!: string;
  password!: string;
    constructor(
    public dialogRef: MatDialogRef<SignInDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
