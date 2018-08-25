import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { config } from '../../providers/Config';


interface PageItem {
  title: string
  component: any
}
type PageList = PageItem[]

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  // A reference to the ion-nav in our component
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'ContentPage';

  pages: PageList;

  constructor(public navCtrl: NavController, public storage: Storage, public config: config) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sign in', component: 'LoginPage' },
      { title: 'Signup', component: 'SignupPage' }
    ];
  }

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }

  Logout() {
    this.storage.set(this.config.Username_Key, "");
    this.storage.set(this.config.Password_Key, "");
    // this.navCtrl.push(MainPage);
    this.navCtrl.setRoot("WelcomePage");
  }
  openPage(page: PageItem) {
    debugger;
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title == "Logout") {
      this.Logout();
    }
    this.nav.setRoot(page.component);
  }
}
