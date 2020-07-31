// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class QrgenerateService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule,} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QrgenerateService {

  constructor(private httpclient : HttpClient) { }


  generateqr(jsondata: {}) {
    console.log(JSON.stringify(jsondata));
  return this.httpclient.post<Blob>('http://localhost:8080/qrgenerate',JSON.stringify(jsondata),{headers : new HttpHeaders({'Content-Type': 'application/json'}),responseType: 'blob' as 'json'});

  }
}