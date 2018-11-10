import { Component,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';

/**
 * Generated class for the AdvMapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMT4rShOPydSz3IMBOeVa0m1BTuUyB5Pc'
    })
  ],
  declarations: [ AdvMapsPage ],
  bootstrap: [ AdvMapsPage ]
})

@Component({
  selector: 'page-adv-maps',
  templateUrl: 'adv-maps.html',
})
export class AdvMapsPage {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvMapsPage');
  }

}
