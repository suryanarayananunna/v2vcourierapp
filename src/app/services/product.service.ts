import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ProductInterface } from "./../get-product-details/ProductInterface";
@Injectable({
  providedIn: 'root'
})



export class ProductService {

  

  constructor(private httpclient : HttpClient) { }

  getProductDetails(jsondata: any): Observable<any> {
    console.log(JSON.stringify(jsondata));
  return this.httpclient.post<any>('http://localhost:8080/getProductDetails',JSON.stringify(jsondata),{headers : new HttpHeaders({'Content-Type': 'application/json'})});

  }

}
