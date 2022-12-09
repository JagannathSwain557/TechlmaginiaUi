import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpClientModule } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Enquiry } from '../model/enquiry';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDailogComponent } from '../error-dailog/error-dailog.component';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
 //addEmpURL : string;
 getEnqURL : string;
 getEmpDownloadUrl : string;

  constructor(private http : HttpClient,public dialog: MatDialog) {

    //this.addEmpURL = 'http://localhost:8081/v1/webportal/enquiry/create';
    this.getEnqURL = 'http://localhost:8081/v1/webportal/enquiry/getall';
    
  this.getEmpDownloadUrl= 'http://localhost:8081/v1/webportal/enquiry/download'
  }
  baseURL="http://localhost:8081/v1/webportal/enquiry/create";


     createEmployee(enquiry: Enquiry): Observable<Object>{
      return this.http.post(this.baseURL, enquiry)
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
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    //  if(this.enquiries.length=0) {
        const dialogRef = this.dialog.open(ErrorDailogComponent, {
          data: {message: 'Error Occured'}
        });
      return throwError(() => {
          return errorMessage;
      });
     
  }
}

  

  /*
     addEmployee(employee : Employee): Observable<Employee> {
     return this.http.post<Employee>(this.addEmpURL,employee);
   }
   updateEmployee(emp :Employee) : Observable<Employee>{
     return this.http.put<Employee>(this.updateEmpUrl, emp);
   }

   deleteEmployee(emp : Employee) : Observable<Employee> {
     return this.http.delete<Employee>(this.deleteEmpUrl+'/'+emp.id);
   }
  
*/