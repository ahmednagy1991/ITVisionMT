import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Heplers } from '../../providers/Helper/Helpers';
import { Device } from '@ionic-native/device';
import { config } from '../../providers/Config';
import { Api } from '../../providers/api/api';
import { TokenModel } from '../../models/TokenModel';
import { EmployeeModel } from '../../models/EmployeeModel';
import { MainPage } from '../';

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
  empResponse: EmployeeModel;
  currentUsernmae: string;
  CurrentPassword: string
  tokenReponse: TokenModel;

  constructor(public navCtrl: NavController, public Config: config, public api: Api, private device: Device, public helper: Heplers, public config: config, public storage: Storage, public alertCtrl: AlertController) {
    debugger;
    //window.location.reload();
   // this.storage.get(this.Config.MainURL_Key).then(res => this.settingItem.mainurl = res);
    this.LoadMainURL();

    // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);

    // this.storage.get(this.config.Username_Key).then(result => this.ValidatedirectLogin(result))
    //   .catch(err => helper.showMessage(err, "error Message"));

    // this.storage.get(this.config.Username_Key).then(result => this.ValidatedirectLogin(result))
    // .catch(err => helper.showMessage(err, "error Message"));

    // this.storage.get(this.config.Username_Key).then(result => this.currentUsernmae = result)
    //   .catch(err => helper.showMessage(err, "error Message"));

    // this.storage.get(this.config.Username_Key).then(result => this.CurrentPassword = result)
    //   .catch(err => helper.showMessage(err, "error Message"));



    this.storage.set(this.config.UUID_Key, this.device.uuid);
    //this.helper.showMessage(this.device.uuid, "UUDI");
  }
  //"emp_id=B00004&uuid=1213&apikey=8b50486998244ae4965678671206bbf3&fields=EMP_NAME,EMP_ID,DEPT_NAME,DEPT_ID,ORG_NAME,DOJ,STATUS&token=I2ZZIIZ4I2IVIIVIJ62KI660JI1PIJ2ZI1MNI36LIIK0IKK3IL62I3P5I0KLIZN6IZK625L1P5P5K6MJ254Z4IPPI0KLP4VIKM112N05NJ4PJVVP6L6V30LNZL3222PMIPPK60K3PM054J101I0M0P1003VVMJ64MKLPNZ4INI52I24VV3I1I0I41IVLP5NP2Z15MP0I3IN405JNLV5J0J4J355V03VMVN6301K4Z01I3L56LN1VN6II332VK0PLZL04IPN4VI4IJ650V015I400KZ3ZL5IZ6IMZPPZZNK4ZZNP6K1P5KV21I624JK31IJ4VI030I3PNIIK0IK2MIZ2ZI2I363K.I2KVIPVPIKMLIK6JI16LIILVI23IIIVIJ6V3I6KPJJJLIJ22I11VI3J0IIK0IKJ4IL36L2ZM10I30K3KK5MKVJL2P5565IL45ZZMP54IK5IZ2KV60MI4N424KVNN1NI10556V1MMLMZMPVZZPK304P1KV062I62KJK31IJ4LI03LI3PNIIK1IK25IZ2P6KK.J3III656J62NIJ5LI0Z0I3LJIIK0IK4JIV6VI2PIIP51JJ23JIIPI4L5I3M5JJVPJIII5NVM2P2L0540213PV24PZKLZZZZ3P4M6Z26KMZP16V1PVKZNZ2VMJPKLN5JKNKP0ZNKN5V1J21VLLP63L2ZPV210Z5IMN1KVLP1L0K1KZ3L4024LLKLV2PV5262IN56MK1II5V2VNI04I5PVJN5I6054JZIM0I20NMZJ31Z00L113JZIZJVV44NMKIVLIIM0KMV1J41J030MI2NN1KV0N0K64JIV4P2MJ5K06N4V4L220LJP4J62N45PLKK2PL1IJ42P30NL5IVZ0JMNMIKNPP55ZZKL24N5ZVLLNZ5IL666L4J5N00P2Z04MJ5K3II6IK1VM1Z264V20N2L5JKP3JZ3LIML2LL5VII5N3NZJ0ZP1IN2P3ZPZ3IMN653J4K115L144366ILPMVM3NVPIVIL625NNVVPP405V6ZZ2412KI55ZJIZ5I42J4P4NI62KJK30IJ40I03MI3PJIIKPIK2JIZ2PI2I1I0NM5IK"
  // loadEmployeeInfo(empid: string) {
  //   //this.storage.get(this.Config.APIToken).then(res =>
  //   this.api.callGet('ivmtwebsdk/ivmtReader.dll/api/v52/ivmtreader/GetEmpInf?emp_id=' + empid
  //     + '&uuid=1213&apikey=' + config.APIKEY + '&fields=EMP_NAME,EMP_ID,DEPT_NAME,DEPT_ID,ORG_NAME,DOJ,STATUS&token=' + config.APIToken, "").subscribe(res => this.setEmployeeInfo(res))
  //   //);

  //   debugger;

  // }

  LoadMainURL() {
    this.storage.get(this.config.MainURL_Key).then(res => this.ValidateUrl(res))
      .catch(err => this.helper.showMessage(err, "error Message"));
  }


  setEmployeeInfo(response: any) {
    this.empResponse = response.result as EmployeeModel;
    debugger;
    this.storage.set(this.Config.EmployeeName_Key, this.empResponse.EMP_NAME);
    this.storage.set(this.Config.EmployeeDepartment_Key, this.empResponse.DEPT_NAME);
    this.storage.set(this.Config.EmployeeOrganization_Key, this.empResponse.ORG_NAME);
  }


  validate(res: any) {
    debugger;
    this.tokenReponse = res as TokenModel;
    if (this.tokenReponse.code == '0') {

      this.storage.set(this.Config.Username_Key, config.EmpID);
      this.storage.set(this.Config.Password_Key, config.CurrentPassword);
      //this.storage.set(this.Config.APIToken, this.tokenReponse.result);
      // config.APIToken=this.tokenReponse.result;


      //this.navCtrl.push(MainPage);
      this.navCtrl.setRoot(MainPage);

    }
    else {
      this.helper.showMessage("Invalid Login", "Login Error");
    }
  }

  // ValidatedirectLogin(res:any) {
  //   debugger;
  //   if (this.currentUsernmae != null && this.currentUsernmae!= undefined && this.currentUsernmae != "") {
  //     this.loadEmployeeInfo(this.currentUsernmae);

  //     this.api.callGet('ivmtwebsdk/ea.dll/api/v52/emxauth2/gettoken?emp_id=' + config.EmpID
  //     + '&emp_pwd=' +config.CurrentPassword + '&uuid=1213&apikey=' + config.APIKEY + '&hash_ver=sha1', "")
  //     .subscribe(res => this.validate(res));

  //     // this.navCtrl.push('DashboardPage');
  //     // this.navCtrl.setRoot('DashboardPage');
  //   }
  // }

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
