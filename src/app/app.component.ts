import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  navigate : any = [
    {
      title : "Home",
      url   : "home/tabs/tab1",
      icon  : "home"
    },
    {
      title : "Generate QR Code",
      url   : "/qrgenerate",
      icon  : "barcode"
    },
    {
      title : "Get Product Details",
      url   : "/get-product-details",
      icon  : "basket"
    },
    {
      title : "Get Customer Details",
      url   : "/get-customer-details",
      icon  : "person"
    },
    {
      title : "Get Courier Details",
      url   : "/get-courier-details",
      icon  : "logo-dropbox"
    },
    {
      title : "Get Delivery Details",
      url   : "/get-delivery-details",
      icon  : "paper-plane"
    },
    {
      title : "Set Delivery Details",
      url   : "/setcourierdetails",
      icon  : "paper-plane"
    },
  ];


    
  public getUrl(item: string){
    if(item == 'Home'){
      this.router.navigateByUrl('/home');
    }
    else if(item == 'Generate QR Code'){
      this.router.navigateByUrl('/qrgenerate');
    }
    else if(item == "Get Product Details"){
      this.router.navigateByUrl('/get-product-details');
    }
    else if(item== "Get Customer Details"){
      this.router.navigateByUrl('/get-customer-details');
    }
    else if(item== "Get Courier Details"){
      this.router.navigateByUrl('/get-courier-details');
    }
    else if(item== "Get Delivery Details"){
      this.router.navigateByUrl('/get-delivery-details');
    }
    else if(item== "Set Delivery Details"){
      this.router.navigateByUrl('/setcourierdetails');
    }
    else{
      this.router.navigateByUrl('/get-courier-details');
    }
  }

}
