import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { User } from '../../providers';
import { MainPage } from '../';
import { DashboardPage } from '../dashboard/dashboard';
import { Settings } from '../../providers/settings/settings';
import { Storage } from '@ionic/storage';
import { config } from '../../providers/Config';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  enableLogin: boolean;
  account: { email: string, password: string,rembmerMe:boolean } = {
    email: 'test@example.com',
    password: 'test',
    rembmerMe:false
  };

  // Our translated text strings
  private loginErrorString: string;
  private stval: string;
  public chachPassword: boolean;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public storage: Storage,
    public setStorage: Settings,
    public alertCtrl: AlertController,
    public config: config) {

    // this.storage.get(this.config.MainURL_Key).then(res =>this.checkURL(res))
    // .catch(err=> this.showMessage(err));

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;

    })


  }

  checkURL(res: string) {
    if (res == null || res == undefined) {
      this.showMessage("null");
      this.enableLogin = false;
      return;
    }
    this.enableLogin = true;
    this.showMessage(res);
  }


  showMessage(MessageBody: string) {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: MessageBody,
      buttons: ['OK']
    });
    alert.present();
  }
  // Attempt to login in through our User service
  doLogin() {
  
    var temp=this.account.rembmerMe;
    var temp1=this.account.email;
    var temp2=this.account.password;
    debugger;
    if(this.account.email!=undefined||this.account.email!="")
    {
      //if valid login
     
      this.storage.set(this.config.Username_Key,this.account.email);
      this.storage.set(this.config.Password_Key,this.account.password);
    }
    //config
    //this.storage.set("Test","Ahmed");
    // this.storage.get("Test").then(res =>
    //   this.showMessage(res)
    // );
    // this.showMessage(this.file.dataDirectory);
    //this.file.createDir("ITVisionData","");
    //   this.file.createFile(this.file.dataDirectory, 'mydir',true);
    //   this.file.writeFile(this.file.dataDirectory, 'mydir',"test test");
    //   this.file.checkFile(this.file.dataDirectory, 'mydir').then(_ => this.showMessage('File exists'))
    //   .catch(err =>
    //   //this.file.createFile(this.file.dataDirectory, 'mydir',true) 
    //   this.showMessage(err)
    // );


    // this.storage.set("test","ahmed");

    // this.storage.get("test") .then(settings => {
    //   debugger;
    //   const alert = this.alertCtrl.create({
    //     title: 'New Friend!',
    //     subTitle:settings["test"],
    //     buttons: ['OK']
    //   });
    //   alert.present();


    // });
    // this.setStorage.setValue(this.setStorage.SETTINGS_MAINURL,"ahmed");
    // this.setStorage.save();
    // this.setStorage.load();
    // this.setStorage.getValue(this.setStorage.SETTINGS_MAINURL).then(res=>this.stval=res);



    this.navCtrl.push(MainPage);
    this.navCtrl.setRoot(MainPage);

    // this.user.login(this.account).subscribe((resp) => {
    //   this.navCtrl.push(MainPage);
    //   //this.navCtrl.push(DashboardPage);
    // }, (err) => {
    //   this.navCtrl.push(MainPage);
    //   // Unable to log in
    //   let toast = this.toastCtrl.create({
    //     message: this.loginErrorString,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
  }
}
