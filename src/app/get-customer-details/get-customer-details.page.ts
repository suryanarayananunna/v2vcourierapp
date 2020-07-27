import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-get-customer-details',
  templateUrl: './get-customer-details.page.html',
  styleUrls: ['./get-customer-details.page.scss'],
})
export class GetCustomerDetailsPage implements OnInit {

  constructor(public customerservice: CustomerService) { }

  ngOnInit() {
  }

  Customer_Id: number;
  Customer_Name: string;
  Customer_Mobile: string;
  Customer_Email: string;
  Customer_Address: string;

  public jsonresult;
  cardDisp = false;
  isresponseNull = false;
  proid: number;
  jsondata: any = {};

  getCustomerDetails(){


    this.jsondata["Customer_Id"] = this.Customer_Id;

    console.log(this.jsondata);
    this.customerservice.getCustomerDetails(this.jsondata).subscribe((response) => {
     
      //console.log(typeof(JSON.stringify(response)));
     // console.log(response);
      if(response!=null){
        this.Customer_Name = response["customer_Name"];
        this.Customer_Id = response["Customer_Id"];
        this.Customer_Mobile = response["customer_Mobile"];
        this.Customer_Address = response["customer_Address"];
        this.Customer_Email = response["customer_Email"];
        console.log(  this.Customer_Name);
  
        console.log(  this.Customer_Id);
        console.log( this.Customer_Id);
        console.log(   this.Customer_Mobile);
        this.cardDisp = true;
        this.isresponseNull = false;
      }
      else{
        this.cardDisp = false;
        this.isresponseNull = true;
        console.log("Null data");
        this.proid = this.Customer_Id;
      }
     
            
   }, error => {
     console.log(error);
      // handle error here
      // error.status to get the error code
   });

  }



  }

