import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { config } from '../../providers/Config';
import { EmployeeModel } from '../../models/EmployeeModel';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  Employee: EmployeeModel={EMP_ID:"",DEPT_NAME:"",DEPT_ID:"",EMP_NAME:"",ORG_NAME:"",DOJ:"",floatDOJ:"",STATE:""};;
  constructor(public Config: config,public storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get(this.Config.UserInformation).then(res => this.MapEmp(res));
  }
  MapEmp(res: any) {
    debugger;
    this.Employee = JSON.parse(res).result as EmployeeModel;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
