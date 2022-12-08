import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enquiry } from '../model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
 //addEmpURL : string;
 getEnqURL : string;
 getEmpDownloadUrl : string;

  constructor(private http : HttpClient) {

    //this.addEmpURL = 'http://localhost:8081/v1/webportal/enquiry/create';
    this.getEnqURL = 'http://localhost:8081/v1/webportal/enquiry/getall';
    
  this.getEmpDownloadUrl= 'http://localhost:8081/v1/webportal/enquiry/download'
  }
  baseURL="http://localhost:8081/v1/webportal/enquiry/create";


     createEmployee(enquiry: Enquiry): Observable<Object>{
      return this.http.post(`${this.baseURL}`, enquiry);
    }
    getAllEnquiry(): Observable<Enquiry[]>{
      return this.http.get<Enquiry[]>(this.getEnqURL);
    }
   // getByEnquiry(): Observable<Enquiry[]>{
    //  return this.http.get<Enquiry[]>(this.getEmpByDateUrl);
    //}
    getByDownload(): Observable<Enquiry[]>{
      return this.http.get<Enquiry[]>(this.getEmpDownloadUrl);
    }
    getEnquiryBetweenDate(startDate:string,endDate: string):Observable<Enquiry[]>{
      let getEmpByDateUrl= 'http://localhost:8081/v1/webportal/enquiry/betweenDates?startDate='+startDate+'&endDate='+endDate;
      return this.http.get<Enquiry[]>(getEmpByDateUrl);

    }

    downloadEnquiryBetweenDate(startDate:string,endDate: string):any{
      let getEmpByDateUrl= 'http://localhost:8081/v1/webportal/enquiry/downloadBetweenDate?startDate='+startDate+'&endDate='+endDate;
      window.open(getEmpByDateUrl);
    }

    
   










    
    getEnqByDate(){
      return this.http.get(" http://localhost:3000/enquiry");
    }















 // download(url: string): Observable<Blob> {
   // return this.http.get(url, {
     // responseType: 'blob'
    //})
 // }
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