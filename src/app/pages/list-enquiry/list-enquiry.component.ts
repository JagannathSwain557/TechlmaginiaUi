import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/service/enquiry.service';
import {AfterViewInit, Component,Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { DatePipe } from '@angular/common'






@Component({
  selector: 'app-list-enquiry',
  templateUrl: './list-enquiry.component.html',
  styleUrls: ['./list-enquiry.component.scss']
})

export class ListEnquiryComponent implements OnInit {
  displayedColumns: string[] = [ 'fullName', 'email', 'phoneNo', 'organization', 'subject','content'];
  dataSource!: MatTableDataSource<Enquiry>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  enquiries: Enquiry[] = [];
 
  startDate : string;
  endDate : string;

  
  constructor(private EnquiryService: EnquiryService,
    private router: Router) { 
    this.startDate='';
    this.endDate='';
      
    }

  ngOnInit(): void {
  
  }

   getEmployees(){
    this.EnquiryService.getAllEnquiry().subscribe(data => {
      this.enquiries = data;
    });
  }
   
  
  getEnquiryBetweenDate(){
    
    this.EnquiryService.getEnquiryBetweenDate(this.startDate.split("-").reverse().join("-")
    ,this.endDate.split("-").reverse().join("-")).subscribe(data => {
      this.enquiries = data;
     
      this.dataSource = new MatTableDataSource( this.enquiries);
      
    });
  
  }
 downloadEnquiryBetweenDate(){
    this.EnquiryService.downloadEnquiryBetweenDate(this.startDate.split("-").reverse().join("-")
    ,this.endDate.split("-").reverse().join("-"))
}
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}

