import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppRate } from 'ionic-native';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  appRate: any = AppRate;
constructor(public navCtrl: NavController,public platform: Platform) {
      this.platform.ready().then(
      () => this.appRate.preferences.storeAppURL = {
        ios: '<Your_App_ID>',
        android: 'market://details?id=<Your_App_ID>'
      } 
    )
  }


  rateApp() {
    AppRate.promptForRating(true);
  }
}
