import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExecuseService } from '../../Services/ExecuseService';
import { ExecuseModel } from '../../models/ExecuseModel';
import { ReasonsModel } from '../../models/ReasonsModel';
import { ExecuseListModel } from '../../models/ExecuseListModel';
import { DateComponent } from '../../models/DateComponent';
import { Heplers } from '../../providers/Helper/Helpers';
/**
 * Generated class for the ExcusesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-excuses',
  templateUrl: 'excuses.html',
})
export class ExcusesPage {

  excModel: ExecuseModel = { to_time: new Date(), desc: "", from_time: new Date(), reason_id: 0, excuse_date: new Date(), pay_status: 0 }
  resons: ReasonsModel[];
  exList: ExecuseListModel[];
  dateComp: DateComponent = { from: new Date().toISOString(), to: new Date().toISOString() };


  constructor(public helper: Heplers, public excService: ExecuseService, public navCtrl: NavController, public navParams: NavParams) {
    //this.LoadResons();
  }

  LoadExecuses() {
    this.excService.GetExecuseList(this.dateComp.from, this.dateComp.to).subscribe((res: any) => {
      debugger;
      if (res.code == 0) {
        this.exList = res.result as ExecuseListModel[];
      }
      else {
        this.helper.ShowErrorMessage(res.code);
      }

    });
  }


  // LoadResons() {
  //   this.excService.GetReasonList().then((res) => {
  //     res.subscribe((resons) => {
  //       this.resons = (resons as any).result as ReasonsModel[];
  //       debugger;
  //     });
  //   });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExcusesPage');
  }

}
