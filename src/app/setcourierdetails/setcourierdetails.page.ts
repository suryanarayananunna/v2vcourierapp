import { Component, OnInit } from '@angular/core';
import { CourierService } from '../services/courier.service';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular/providers/menu-controller';

@Component({
  selector: 'app-setcourierdetails',
  templateUrl: './setcourierdetails.page.html',
  styleUrls: ['./setcourierdetails.page.scss'],
})
export class SetcourierdetailsPage implements OnInit {

  public setCourierDetails: FormGroup;

  constructor(public courierservice: CourierService,
    private formBuilder: FormBuilder,
    public menuCtrl: MenuController,) { }

    ionViewWillEnter() {
      this.menuCtrl.enable(false);
    }
  

  ngOnInit() {

    this.setCourierDetails = this.formBuilder.group({
      'Courier_id': [null, Validators.compose([
        Validators.required
      ])],
      'Courier_Current_Location': [null, Validators.compose([
        Validators.required
      ])],
      'Courier_Customer_Id': [null, Validators.compose([
        Validators.required
      ])],
      
      'Courier_Deli_Id': [null, Validators.compose([
        Validators.required
      ])],
      
      'Courier_Desc': [null, Validators.compose([
        Validators.required
      ])],
      
      'Courier_Name': [null, Validators.compose([
        Validators.required
      ])],
      
      'Courier_Product_Id': [null, Validators.compose([
        Validators.required
      ])],
      'Courier_Type': [null, Validators.compose([
        Validators.required
      ])],
      
    });


  }


  //  public CourierData = {
  //   Courier_id:  "",
  //   Courier_Name:   "", 
  //   Courier_Desc: "",  
  //   Courier_Product_Id:  "",
  //   Courier_Customer_Id: "",
  //   Courier_Type: ""
  //  };
   jsondata: any;

   setCourierDetailsMethod():void{
    // this.jsondata["Courier_id"] = this.CourierData["Courier_id"];
    // this.jsondata["Courier_Name"] = this.CourierData["Courier_Name"];
    // this.jsondata["Courier_Desc"] = this.CourierData["Courier_Desc"];
    // this.jsondata["Courier_Type"] = this.CourierData["Courier_Type"];
    // this.jsondata["Courier_Product_Id"] =this.CourierData["Courier_Product_Id"];
    // this.jsondata["Courier_Customer_Id"] = this.CourierData["Courier_Customer_Id"];
    console.log("THE JOSN DATA " + this.setCourierDetails);
    this.courierservice.setcourierdetails(this.setCourierDetails).subscribe(res => {
      // do whatever you want with the response
   
          console.log("got result back"+ res);


   }, error => {
     console.log(error);
      // handle error here
      // error.status to get the error code
   });

  }


}
