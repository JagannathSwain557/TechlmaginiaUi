import { NgFor } from '@angular/common';
import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorDailogComponent } from 'src/app/error-dailog/error-dailog.component';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/service/enquiry.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

register =new FormGroup({
  uname: new FormControl("",Validators.required),
  email: new FormControl("",Validators.required),
  organization: new FormControl("",Validators.required),
  subject: new FormControl("",Validators.required),
  content: new FormControl("",Validators.required)
});

  Enquiry: Enquiry = new Enquiry();

  constructor(private empService : EnquiryService,private router: Router,public dialog: MatDialog) { 
 
  }
  ngOnInit(): void {
  }
  
  
saveEmployee(){
  this.empService.createEmployee(this.Enquiry).subscribe( data =>{
    //if(this.enquiries.length=0) {
      const dialogRef = this.dialog.open(ErrorDailogComponent, {
        data: {message: 'Saved successfully'},
      });
    
  },
  error => console.log(error));
}
goToEmployeeList(){
  this.router.navigate(['/create']);
}
onSubmit(){
  //console.log(this.Enquiry);
  //this.saveEmployee();
  console.log(this.register.value)
}

get vname(){
  return this.register.get("uname");
}
get vemail(){
  return this.register.get("email");
}
get vorganization(){
  return this.register.get("organization");
}
get vsubject(){
  return this.register.get("subject");
}
get vcontent(){
  return this.register.get("content");
}

}
