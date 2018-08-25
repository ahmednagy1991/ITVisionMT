import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Chart } from 'chart.js';

import { User } from '../../providers';
import { Api } from '../../providers/api/api';
import { MainPage } from '../';
import { Heplers } from '../../providers/Helper/Helpers';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  myobj:{id}={id:1};

  account: { emp_id: string, emp_pwd: string ,uuid:string,apikey:string,hash_ver:string} = {
    emp_id:"B00004",
    emp_pwd:"123",
    uuid:"1213",
    apikey:"8b50486998244ae4965678671206bbf3",
    hash_ver:"sha1"
  };

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  dashbrd:string;
  constructor(public navCtrl: NavController,public helper:Heplers, public api:Api,public navParams: NavParams,public translateService: TranslateService) {
  } 

  ionViewDidLoad() {
    this.dashbrd="Reports";
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 //"Purple", "Orange"
      //type: 'doughnut',
      type: 'pie',
      data: {
          labels: ["Total Absence", "Total Delay", "Total Leaves", "Total Working" ],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 0.2)',
                  // 'rgba(255, 159, 64, 0.2)'
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  // "#36A2EB",
                  // "#FFCE56"
              ]
          }]
      }

  });


    console.log('ionViewDidLoad DashboardPage');

    //.then(res=>this.helper.showMessage(JSON.stringify(res),"Info")).catch(err=>this.helper.showMessage(JSON.stringify(err),"Info"));
   //this.api.callGet('http://52.232.2.194/ivmtwebsdk/ea.dll/api/v52/emxauth2/gettoken',this.account).subscribe(res=>this.helper.showMessage(JSON.stringify(res),""));
   //this.api.get('http://192.168.1.13:8080/datasnap/rest/TServerMethods1/EchoString/test',this.account).subscribe(res=>this.helper.showMessage(JSON.stringify(res),""));
    // .subscribe((res: any) => {
    //   debugger;
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
       
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

  

    //this.api.post("gettoken","emp_id=B00004 emp_pwd=123 uuid=1213 apikey=8b50486998244ae4965678671206bbf3 hash_ver=sha1").map(data => this.helper.showMessage(JSON.stringify(data) ,"Info")).ca
   // debugger;
  }

  TimeTablePage(){
    this.navCtrl.push("TimeTablePage");
  }

  GeoPunchPage(){
    this.navCtrl.push("PunchingPage");
  }

}
