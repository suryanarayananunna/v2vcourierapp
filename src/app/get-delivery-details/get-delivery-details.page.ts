import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-get-delivery-details',
  templateUrl: './get-delivery-details.page.html',
  styleUrls: ['./get-delivery-details.page.scss'],
})
export class GetDeliveryDetailsPage implements OnInit {

  constructor(public deliveryservice :DeliveryService) { }

  ngOnInit() {
  }



  Delivery_Id: number;
  delivery_date: string;
  delivery_Type: string;
  delivery_By: string;
  delivery_Address: string;
  delivery_Person_Name: string;
  

  public jsonresult;
  cardDisp = false;
  isresponseNull = false;
  proid: number;
  jsondata: any = {};


  getDeliveryDetails(){

    
    this.jsondata["Delivery_Id"] = this.Delivery_Id;

    console.log(this.jsondata);
    this.deliveryservice.getDeliveryDetails(this.jsondata).subscribe((response) => {
     
      //console.log(typeof(JSON.stringify(response)));
     // console.log(response);
      if(response!=null){
        this.delivery_date = response["delivery_date"];
        this.Delivery_Id = response["Delivery_Id"];
        this.delivery_Type = response["delivery_Type"];
        this.delivery_Address = response["delivery_Address"];
        this.delivery_By = response["delivery_By"];
        this.delivery_Person_Name = response["delivery_Person_Name"];
        console.log(  this.delivery_date);
  
        console.log(  this.Delivery_Id);
        console.log( this.Delivery_Id);
        console.log(   this.delivery_Type);
        this.cardDisp = true;
        this.isresponseNull = false;
      }
      else{
        this.cardDisp = false;
        this.isresponseNull = true;
        console.log("Null data");
        this.proid = this.Delivery_Id;
      }
     
            
   }, error => {
     console.log(error);
      // handle error here
      // error.status to get the error code
   });

  }

  }

