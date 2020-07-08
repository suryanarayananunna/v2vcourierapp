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
      url   : "/home",
      icon  : "home"
    },
    {
      title : "qrcodereader",
      url   : "/qrcodereader",
      icon  : "chatbubbles-outline"
    },
    {
      title : "Contacts",
      url   : "/recepies",
      icon  : "call-outline"
    },
  ];


    
  public getUrl(item: string){
    if(item == 'Home'){
      this.router.navigateByUrl('/home');
    }
    else if(item == 'qrcodereader'){
      this.router.navigateByUrl('/qrcodereader');
    }
    else{
      this.router.navigateByUrl('/contacts');
    }
  }

}
