import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  getDeliveryDetails(jsondata: any) {
    console.log(JSON.stringify(jsondata));
    return this.httpclient.post<any>('http://localhost:8080/getDeliveryDetails',JSON.stringify(jsondata),{headers : new HttpHeaders({'Content-Type': 'application/json'})});
  
  }

  constructor(public httpclient : HttpClient) { }
}
