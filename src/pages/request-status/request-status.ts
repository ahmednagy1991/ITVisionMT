import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { DateComponent } from '../../models/DateComponent';
import { Heplers } from '../../providers/Helper/Helpers';
import { RequestService } from '../../Services/RequestService';
import { RequestStatusModel } from '../../models/RequestStatusModel';
/**
 * Generated class for the RequestStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-status',
  templateUrl: 'request-status.html',
})
export class RequestStatusPage {

  RequestList: RequestStatusModel[];
  dateComp: DateComponent = { from: new Date().toISOString(), to: new Date().toISOString() };

  constructor(public helper: Heplers, public reqService: RequestService, public navCtrl: NavController, public navParams: NavParams) {
  }

  MapRequestListTable(res: any) {
    debugger;
    if (res.code == 0) {
      this.RequestList = res.result as RequestStatusModel[];
    }
    else {
      this.helper.ShowErrorMessage(res.code);
    }




  }

  GetRequestStatus() {
    this.reqService.GetRequestStatus(this.dateComp.from, this.dateComp.to).subscribe(res => this.MapRequestListTable(res));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestStatusPage');
  }

}
