
import { Component ,OnInit,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the TestBingMapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-bing-maps',
  templateUrl: 'test-bing-maps.html',
})
export class TestBingMapsPage{


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestBingMapsPage');
  }

  LoadMap() {

  }

}
