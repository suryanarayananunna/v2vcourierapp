import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-get-product-details',
  templateUrl: './get-product-details.page.html',
  styleUrls: ['./get-product-details.page.scss'],
})
export class GetProductDetailsPage implements OnInit {

  constructor(private productservice : ProductService ) { }

  ngOnInit() {
  }

  Product_Id: number;
  public jsondata = {};
  public Product_Desc: string;
  public Product_Name: string = "null";
  public Product_Price: number;
  // public jsonresult = {
  // "Product_Id": this.Product_Id,
  // "Product_Desc": this.Product_Desc,
  // "Product_Name": this.Product_Name,
  // "Product_Price": this.Product_Price
  // };
  public jsonresult;
  cardDisp = false;
  isresponseNull = false;
  proid: number;
   

  getProductDetails(): void{
    var res = []; 
    this.jsondata["Product_Id"] = this.Product_Id;

    console.log(this.jsondata);
    this.productservice.getProductDetails(this.jsondata).subscribe((response) => {
     
      //console.log(typeof(JSON.stringify(response)));
      console.log(response);
      if(response!=null){
        this.Product_Desc = response["product_Desc"];
        this.Product_Id = response["Product_Id"];
        this.Product_Name = response["product_Name"];
        this.Product_Price = response["product_Price"];
        console.log( this.Product_Desc);
  
        console.log(  this.Product_Id);
        console.log( this.Product_Name);
        console.log(  this.Product_Price);
        this.cardDisp = true;
        this.isresponseNull = false;
      }
      else{
        this.cardDisp = false;
        this.isresponseNull = true;
        console.log("Null data");
        this.proid = this.Product_Id;
      }
     
            
   }, error => {
     console.log(error);
      // handle error here
      // error.status to get the error code
   });

  }

}
