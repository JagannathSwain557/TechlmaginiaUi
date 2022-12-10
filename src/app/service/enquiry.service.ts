import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Enquiry } from '../model/enquiry';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDailogComponent } from '../error-dailog/error-dailog.component';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  [x: string]: any;
 //addEmpURL : string;
 getEnqURL : string;
 getEmpDownloadUrl : string;

  constructor(private http : HttpClient) {

    //this.addEmpURL = 'http://localhost:8081/v1/webportal/enquiry/create';
    this.getEnqURL = 'http://localhost:8081/v1/webportal/enquiry/getall';
    
  this.getEmpDownloadUrl= 'http://localhost:8081/v1/webportal/enquiry/download'
  }
  baseURL="http://localhost:8081/v1/webportal/enquiry";
    createEnquiry(Enquiry: Enquiry) {
      return this.http.post(this.baseURL + "/create", Enquiry)
      .pipe(retry(1), catchError(this.handleError));
    }
    getEnquiryBetweenDate(startDate:string,endDate: string):Observable<Enquiry[]>{
      let getEmpByDateUrl= 'http://localhost:8081/v1/webportal/enquiry/betweenDates?startDate='+startDate+'&endDate='+endDate;
      return this.http.get<Enquiry[]>(getEmpByDateUrl)
      .pipe(retry(1), catchError(this.handleError));

    }

    downloadEnquiryBetweenDate(startDate:string,endDate: string):any{
      let getEmpByDateUrl= 'http://localhost:8081/v1/webportal/enquiry/downloadBetweenDate?startDate='+startDate+'&endDate='+endDate;
      window.open(getEmpByDateUrl);
  
    }
    handleError(error:any) {
      let errorMessage = '';
      console.log('===============================error happend========')
  
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    //  if(this.enquiries.length=0) {
       
      return throwError(() => {
          return errorMessage;
      });
     
  }
  getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
}
}
