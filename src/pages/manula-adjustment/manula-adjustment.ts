import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PunchesService } from '../../Services/PunchesService';
import { ReaderModel } from '../../models/ReaderModel';
import { ReasonsModel } from '../../models/ReasonsModel';
import { SubmitAdjustmentModel } from '../../models/SubmitAdjustmentModel';
import { Heplers } from '../../providers/Helper/Helpers';

/**
 * Generated class for the ManulaAdjustmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manula-adjustment',
  templateUrl: 'manula-adjustment.html',
})
export class ManulaAdjustmentPage {

  readerList: ReaderModel[];
  resons: ReasonsModel[];
  adj: SubmitAdjustmentModel = { punch_date: new Date(), punch_time: new Date(), Punch_type: 0, reader_id: 0, reason_id: 0, req_note: "" };

  constructor(public helper: Heplers, public punchSer: PunchesService, public navCtrl: NavController, public navParams: NavParams) {
    this.LoadResons();
    this.LoadReaders();
  }

  submitAdjustment() {
    this.punchSer.SubmitManulaAdjustment(this.adj).subscribe((res: any) => {

      if (res.code == 0) {
        this.helper.showMessage("Request has been submited successfully", "Done");

      }
      else {
        debugger;
        this.helper.ShowErrorMessage(res.code);
      }

      // let obj = (res as any);
      // debugger;
      // switch (obj.code) {
      //   case 51003:
      //     this.helper.showMessage("Request already exists", "Error");
      //     break;
      //   case 0:
      //     break;
      // }

    });

  }


  LoadReaders() {
    this.punchSer.GetReaderList().then((res) => {
      res.subscribe((ret) => {
        debugger;
        this.readerList = (ret as any).result as ReaderModel[];
        debugger;
      });
    });
  }

  LoadResons() {
    this.punchSer.GetReasonList().then((res) => {
      res.subscribe((resons) => {
        this.resons = (resons as any).result as ReasonsModel[];
        debugger;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManulaAdjustmentPage');
  }

}
