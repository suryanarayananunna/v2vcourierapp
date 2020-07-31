import { Component, OnInit } from '@angular/core';
import { QrgenerateService } from '../services/qrgenerate.service';

@Component({
  selector: 'app-qrgenerate',
  templateUrl: './qrgenerate.page.html',
  styleUrls: ['./qrgenerate.page.scss'],
})
export class QrgeneratePage implements OnInit {

 

  public QRData= {
     Courier_id :  "",
     Courier_Name:   "", 
     Courier_Desc: "",  
     Courier_Product_Id:  "",
     Courier_Customer_Id: "",
     Courier_Type: ""
    };
    public valid: false;

    // if(this.QRData["Courier_id"] != "" && QRData.Courier_Name != "" && QRData.Courier_Desc != "" && QRData.Courier_Product_Id != "" && QRData.Courier_Customer_Id != "" && QRData.Courier_Type != "" ){

    // }

  public jsondata = {};

  constructor(private qrservice : QrgenerateService) { }

  ngOnInit() {
  }

  // register(UserName : string,Email : string, Password : string , Role : string) : void{
  //   this.Email = Email;
  //   this.Password = Password;
  //   this.Role = Role;
  //   this.UserName = UserName;
  //   console.log("FORM DATA" + Role+UserName+Email+Password);
  //   this.jsondata["UserName"] = this.UserName;
  //   this.jsondata["Email"] = this.Email;
  //   this.jsondata["Password"] = this.Password;
  //   this.jsondata["Role"] = this.Role;
  //   console.log("THE JOSN DATA " + this.jsondata);
  //   this.qrservice.registerdata(this.jsondata).subscribe(response => {
  //     // do whatever you want with the response
  //     console.log(response);
  //  }, error => {
  //    console.log(error);
  //     // handle error here
  //     // error.status to get the error code
  //  });
    
  // }
  retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message: string;
    imageName: any;
    imageUrl: any;
    base64data: any;

  generateQrCode() : void{



    this.jsondata["Courier_id"] = this.QRData["Courier_id"];
    this.jsondata["Courier_Name"] = this.QRData["Courier_Name"];
    this.jsondata["Courier_Desc"] = this.QRData["Courier_Desc"];
    this.jsondata["Courier_Type"] = this.QRData["Courier_Type"];
    this.jsondata["Courier_Product_Id"] =this.QRData["Courier_Product_Id"];
    this.jsondata["Courier_Customer_Id"] = this.QRData["Courier_Customer_Id"];
    console.log("THE JOSN DATA " + this.jsondata);
    this.qrservice.generateqr(this.jsondata).subscribe(res => {
      // do whatever you want with the response
   
          console.log("got result back"+ res);


          var reader = new FileReader();
          reader.readAsDataURL(res); 
          reader.onloadend = function() {
            var base64data;
              base64data = reader.result;                
              console.log(base64data);
          }

          //rename imageFileBinary to imageUrl

let imageBinary = this.base64data; //image binary data response from api
let imageBase64String= btoa(imageBinary);
this.imageUrl = 'data:image/jpeg;base64,' + imageBase64String;

console.log(this.imageUrl)




          console.log(res.type);
   }, error => {
     console.log(error);
      // handle error here
      // error.status to get the error code
   });

  }



}
