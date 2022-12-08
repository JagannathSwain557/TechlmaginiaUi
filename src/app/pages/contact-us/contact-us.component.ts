import { NgFor } from '@angular/common';
import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/service/enquiry.service';

@Component({
  selector: 'app-contact-us',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  Enquiry: Enquiry = new Enquiry();
  constructor(private empService : EnquiryService,private router: Router) { 
 
  }
  ngOnInit(): void {
  }
saveEmployee(){
  this.empService.createEmployee(this.Enquiry).subscribe( data =>{
    console.log(data);
    //this.goToEmployeeList();
  },
  error => console.log(error));
}
goToEmployeeList(){
  this.router.navigate(['/create']);
}
onSubmit(){
  console.log(this.Enquiry);
  this.saveEmployee();
}
}
