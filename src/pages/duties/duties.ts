import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeaveModel } from '../../models/LeaveModel';
import { DateComponent } from '../../models/DateComponent';
import { LeavesService } from '../../Services/LeavesService';
import { Heplers } from '../../providers/Helper/Helpers';
import { TranslateService } from '@ngx-translate/core';
import { DutiesListModel } from '../../models/DutiesListModel';


/**
 * Generated class for the DutiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-duties',
  templateUrl: 'duties.html',
})
export class DutiesPage {

  DutiyList: DutiesListModel[];
  dateComp: DateComponent = { from: new Date().toISOString(), to: new Date().toISOString() };

  constructor(public helper: Heplers, public LevService: LeavesService, public navCtrl: NavController, public navParams: NavParams) {
  }


  MapDutiesListTable(res: any) {
    debugger;
    if (res.code == 0) {
      this.DutiyList = res.result as DutiesListModel[];
    }
    else {
      this.helper.ShowErrorMessage(res.code);
    }

  }


  GetDutiesList() {
    this.LevService.GetDutyList(this.dateComp.from, this.dateComp.to).subscribe((res) => {
      debugger;
      this.MapDutiesListTable(res);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DutiesPage');
  }

}
