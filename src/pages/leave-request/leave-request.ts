import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReasonsModel } from '../../models/ReasonsModel';
import { SubmitLeavModel } from '../../models/SubmitLeavModel';
import { LeavesService } from '../../Services/LeavesService'
import { Heplers } from '../../providers/Helper/Helpers';
/**
 * Generated class for the LeaveRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave-request',
  templateUrl: 'leave-request.html',
})
export class LeaveRequestPage {

  resons: ReasonsModel[];
  leaveRequest: SubmitLeavModel = { Description: "", EndDate: new Date(), Notes: "", Paystatus: 0, ReasonID: 0, StartDate: new Date() };

  constructor(public helper: Heplers, public leavService: LeavesService, public navCtrl: NavController, public navParams: NavParams) {
    this.LoadResons();
  }

  submitLeave() {
    this.leavService.RequestLeave(this.leaveRequest).subscribe((res: any) => {

      debugger;
      if (res.code == 0) {
        this.helper.showMessage("Leave request has been submitted successfully", "Done");
      }
      else {
        this.helper.ShowErrorMessage(res.code);
      }
    });
  }

  LoadResons() {
    this.leavService.GetReasonList().then((res) => {
      res.subscribe((resons) => {
        this.resons = (resons as any).result as ReasonsModel[];
        debugger;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveRequestPage');
  }

}
