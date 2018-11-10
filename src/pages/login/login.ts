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
import { Api } from '../../providers/api/api';
import { TokenModel } from '../../models/TokenModel';
import { ApiParameters } from '../../models/ApiParameters';
import { AccountModel } from '../../models/AccountModel';
import { EmployeeModel } from '../../models/EmployeeModel';

import { Heplers } from '../../providers/Helper/Helpers';


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
  tokenReponse: TokenModel;
  empResponse: EmployeeModel;
  Params: ApiParameters;

  account: AccountModel = { empId: "", password: "", rembmerMe: false };

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
    public Config: config, public api: Api, public helper: Heplers) {
    this.storage.get(this.Config.Username_Key).then((res) => {
      debugger;
      if (res != "" && res != null && res != "null" && res != undefined) {
        this.account = JSON.parse(res) as AccountModel;
        this.doLogin();
      }

    });

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






  validate(res: any) {
    debugger;
    this.tokenReponse = res as TokenModel;
    if (this.tokenReponse.code == '0') {

      this.api.callGet('ivmtwebsdk/ivmtReader.dll/api/v52/ivmtreader/GetEmpInf?emp_id=' + this.account.empId
        + '&uuid=1213&apikey=' + config.APIKEY + '&fields=EMP_NAME,EMP_ID,DEPT_NAME,DEPT_ID,ORG_NAME,DOJ,STATUS&token=' + this.tokenReponse.result, "").subscribe(res => this.storage.set(this.Config.UserInformation, JSON.stringify(res as EmployeeModel)))

      this.Params = {
        ApiToken: this.tokenReponse.result,
        ApiKey: config.APIKEY,
        EmpId: this.account.empId
      }
      this.storage.set(this.Config.ConnectionParameter, JSON.stringify(this.Params));

      let temp = this.account.rembmerMe;
      debugger;
      if (this.account.rembmerMe == true) {
        this.storage.set(this.Config.Username_Key, JSON.stringify(this.account));
      }
      this.storage.set(this.Config.ConnectionParameter, JSON.stringify(this.Params));
      //this.storage.set(this.Config.Username_Key, JSON.stringify());
      // this.storage.set(this.Config.Username_Key, this.account.empId);
      // this.storage.set(this.Config.Password_Key, this.account.password);
      // this.storage.set(this.Config.APIToken, this.tokenReponse.result);
      // config.EmpID = this.account.empId;
      this.navCtrl.push(MainPage);
      this.navCtrl.setRoot(MainPage);

    }
    else {
      this.helper.showMessage("Invalid Login", "Login Error");
    }
  }
  doLogin() {
    debugger;
    if (this.account.empId != undefined || this.account.empId != "") {
      this.api.callGet('ivmtwebsdk/ea.dll/api/v52/emxauth2/gettoken?emp_id=' + this.account.empId
        + '&emp_pwd=' + this.account.password + '&uuid=1213&apikey=' + config.APIKEY + '&hash_ver=sha1', "")
        .subscribe((res) => {
          this.validate(res);

        });
    }
  }


  
}

