import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, map, shareReplay } from 'rxjs';
import { Enquiry } from 'src/app/model/enquiry';
import { SignInDialogComponent } from 'src/app/signIn-dailog/signIn-dailog.component';
export interface DialogData {
  userName: string;
  password: string;
}
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  userName!: string;
  password!: string;
  enquiries: Enquiry[] = [];
  openDialog(): void {
    const dialogRef = this.dialog.open(SignInDialogComponent, {
      data: {name: this.password, animal: this.userName},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.userName = result;
    });
  }
  currentYear : number;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {
    this.currentYear = new Date().getFullYear();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 handleDrawerClick(drawer : MatSidenav) {
  if (drawer.mode == 'over') drawer.close();
  }


}
