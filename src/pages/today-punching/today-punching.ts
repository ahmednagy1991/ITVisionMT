import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { DateComponent } from '../../models/DateComponent';
import { PunchesService } from '../../Services/PunchesService';
import { Heplers } from '../../providers/Helper/Helpers';
import { PunchModel } from '../../models/PunchModel';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the TodayPunchingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-today-punching',
  templateUrl: 'today-punching.html',
})
export class TodayPunchingPage {

  PunchTable: PunchModel[];
  dateComp: DateComponent = { from: new Date().toISOString(), to: new Date().toISOString() };

  constructor(public helper: Heplers, public translateService: TranslateService, public punchService: PunchesService, public navCtrl: NavController, public navParams: NavParams) {
  }


  MapPunchTable(res: any) {
    debugger;
    if (res.code == 0) {
      this.PunchTable = res.result as PunchModel[];
    }
    else {
      this.helper.ShowErrorMessage(res.code);
    }

  }


  GetPunches() {
    this.punchService.GetPunches(this.dateComp.from.toString(), this.dateComp.to.toString()).subscribe(res => this.MapPunchTable(res));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodayPunchingPage');
  }

}
