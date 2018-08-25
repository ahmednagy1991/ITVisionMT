import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { config } from '../../providers/Config';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Heplers } from '../../providers/Helper/Helpers';
import { Device } from '@ionic-native/device';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  enableLogin: boolean;
  constructor(public navCtrl: NavController, private device: Device, public helper: Heplers, public config: config, public storage: Storage, public alertCtrl: AlertController) {

    this.storage.get(this.config.MainURL_Key).then(res =>  this.ValidateUrl(res))
      .catch(err => helper.showMessage(err, "error Message"));

    this.storage.get(this.config.Username_Key).then(result => this.ValidatedirectLogin(result))
      .catch(err => helper.showMessage(err, "error Message"));

    // this.storage.forEach( (value, key, index) => {
    //   debugger;
    //   console.log("This is the value", value)
    //   console.log("from the key", key)
    //  // console.log("Index is" index)
    // })
  //  this.storage.get(this.config.MainURL_Key).catch(m=> this.ValidateUrl(m));
   // this.storage.get(this.config.Username_Key).catch(m=> this.ValidatedirectLogin(m));
   // var MainURL = this.storage.get(this.config.MainURL_Key);
   // var Username = this.storage.get(this.config.Username_Key);


    // Promise.all([MainURL, Username]).then((arrayOfResults) => {
    //   debugger;
    //   this.ValidateUrl(arrayOfResults[0]);
    //   this.ValidatedirectLogin(arrayOfResults[1]);
    // });


    this.storage.set(this.config.UUID_Key, this.device.uuid);
    //this.helper.showMessage(this.device.uuid, "UUDI");
  }


  ValidatedirectLogin(result: string) {
    debugger;
    if (result != null && result != undefined && result != "") {
      this.navCtrl.push('DashboardPage');
      this.navCtrl.setRoot('DashboardPage');
    }
  }

  ValidateUrl(res: string) {
    debugger;
    if (res == null || res == undefined || res == "") {
      this.helper.presentToast("Please set valid url for service ", 9000);
    }
    this.enableLogin = this.helper.checkURL(res)
  }


  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  settings() {
    this.navCtrl.push('SettingsPage');
  }

}
