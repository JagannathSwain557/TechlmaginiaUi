import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/service/enquiry.service';
@Component({
  selector: 'app-list-enquiry',
  templateUrl: './list-enquiry.component.html',
  styleUrls: ['./list-enquiry.component.scss']
})


export class ListEnquiryComponent implements OnInit {
  enquiries: Enquiry[] = [];
  displayedColumns: string[] = ['id', 'fullName', 'email', 'phoneNo','organization','subject','content','createdDate'];
  //public dataSource = new MatTableDataSource<Enquiry>();

  dataSource = this.enquiries; 
  startDate : string;
  endDate : string;

  
  constructor(private EnquiryService: EnquiryService,
    private router: Router) { 
    this.startDate='';
    this.endDate='';
    }

  ngOnInit(): void {
  //  this.getEmployees();
  //this.getEnquiryBetweenDate();
  }/*
  getStudentsInformation(){
    this.EnquiryService.getAllEnquiry()
      .subscribe((res)=>{
        console.log(res);
        this.dataSource.data = res;
      })
  }*/

   getEmployees(){
    this.EnquiryService.getAllEnquiry().subscribe(data => {
      this.enquiries = data;
    });
  }
  getEnquiryBetweenDate(){
    console.log("=============================",this.startDate,this.endDate);
    this.EnquiryService.getEnquiryBetweenDate(this.startDate,this.endDate).subscribe(data => {
      this.enquiries = data;
      console.log("=============================",this.startDate,this.endDate);
    });
  
  }
 downloadEnquiry(){
    this.EnquiryService.getByDownload().subscribe(data => {
      this.enquiries = data;
   });

}

}