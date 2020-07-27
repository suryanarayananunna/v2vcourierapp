import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})

export class IntroPage implements OnInit {

  selectedLanguage: string;

  constructor(public navCtrl: NavController,public menuCtrl: MenuController,public storage: Storage) {
     
    }
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  ngOnInit() {
  
    this.storage.get('isFirst').then(val => {
      if(isNullOrUndefined(val)) {
        this.storage.set('isFirst', false);
      } else if (!val) {
        this.navCtrl.navigateRoot('/home/tabs/tab1');
       
      }
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  gotoLogin(): void {
    this.menuCtrl.enable(true);
    this.navCtrl.navigateForward('home/tabs/tab1');
  }


}
