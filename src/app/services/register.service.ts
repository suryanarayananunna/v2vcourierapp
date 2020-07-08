// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule,} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';


// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };


@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  

  constructor(private httpclient : HttpClient) { }
  
  
  
  registerdata (jsondata : any) : Observable<any>{

  console.log(JSON.stringify(jsondata));
  return this.httpclient.post<any>('http://localhost:8080/register',JSON.stringify(jsondata),{headers : new HttpHeaders({'Content-Type': 'application/json'})});


  }
}
