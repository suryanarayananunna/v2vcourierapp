import { Component, OnInit } from '@angular/core';
import { CourierService } from '../services/courier.service';

@Component({
  selector: 'app-get-courier-details',
  templateUrl: './get-courier-details.page.html',
  styleUrls: ['./get-courier-details.page.scss'],
})
export class GetCourierDetailsPage implements OnInit {

  constructor(public courierservice: CourierService) { }

  ngOnInit() {
  }


  Courier_id: number;
  Courier_Name: string;
  courier_Type: string;
  courier_Current_Location: string;
  courier_Desc: string;

  public jsonresult;
  cardDisp = false;
  isresponseNull = false;
  proid: number;
  jsondata: any = {};

  getCourierDetails(){

    this.jsondata["Courier_id"] = this.Courier_id;

    console.log(this.jsondata);
    this.courierservice.getCourierDetails(this.jsondata).subscribe((response) => {
     
      //console.log(typeof(JSON.stringify(response)));
     // console.log(response);
      if(response!=null){
        this.Courier_Name = response["courier_name"];
        this.Courier_id = response["Courier_id"];
        this.courier_Type = response["courier_Type"];
        this.courier_Desc = response["courier_Desc"];
        this.courier_Current_Location = response["courier_Current_Location"];
        console.log(  this.Courier_Name);
  
        console.log(  this.Courier_id);
        console.log( this.Courier_id);
        console.log(   this.courier_Type);
        this.cardDisp = true;
        this.isresponseNull = false;
      }
      else{
        this.cardDisp = false;
        this.isresponseNull = true;
        console.log("Null data");
        this.proid = this.Courier_id;
      }
     
            
   }, error => {
     console.log(error);
      // handle error here
      // error.status to get the error code
   });

  }

  }

