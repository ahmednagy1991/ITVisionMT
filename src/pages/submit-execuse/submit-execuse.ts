import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExecuseService } from '../../Services/ExecuseService';
import { ExecuseModel } from '../../models/ExecuseModel';
import { ReasonsModel } from '../../models/ReasonsModel';
import { Heplers } from '../../providers/Helper/Helpers';
/**
 * Generated class for the SubmitExecusePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-submit-execuse',
  templateUrl: 'submit-execuse.html',
})
export class SubmitExecusePage {

  excModel: ExecuseModel = { to_time: new Date(), desc: "", from_time: new Date(), reason_id: 0, excuse_date: new Date(), pay_status: 0 }
  resons: ReasonsModel[];
  response: any;
  constructor(public helper: Heplers, public excService: ExecuseService, public navCtrl: NavController, public navParams: NavParams) {
    this.LoadResons();
  }
  submitExecuse() {
    this.excService.RequestExecuse(this.excModel).subscribe((res:any) => {

      this.response = res;
      if (this.response.code == 0) {
        this.helper.showMessage("The request has been submited successfully", "Done");
      }
      else {
        this.helper.ShowErrorMessage(res.code);
      }

    });
  }

  LoadResons() {
    this.excService.GetReasonList().then((res) => {
      res.subscribe((resons) => {
        this.resons = (resons as any).result as ReasonsModel[];
        debugger;
      });
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitExecusePage');
  }

}
