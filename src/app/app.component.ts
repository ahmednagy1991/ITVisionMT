import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';

import { Storage } from '@ionic/storage';
import { config } from '../providers/Config';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>ITVisionMT</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
      
       
       <ion-icon name="{{p.icon}}"></ion-icon>
       {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})

// <div *ngIf="p.isHead;else  <ion-item-divider color="light">A</ion-item-divider>">
        
// </div>

export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    // { title: 'Tutorial', component: 'TutorialPage' },
    // { title: 'Welcome', component: 'WelcomePage' },
    // { title: 'Tabs', component: 'TabsPage' },
    // { title: 'Cards', component: 'CardsPage' },
    // { title: 'Content', component: 'ContentPage' },
    // { title: 'Login', component: 'LoginPage' },
    // { title: 'Signup', component: 'SignupPage' },
    // { title: 'Master Detail', component: 'ListMasterPage' },
    // { title: 'Menu', component: 'MenuPage' },
    // { title: 'Settings', component: 'SettingsPage' },
    // { title: 'Search', component: 'SearchPage' },
    { title: 'Home', component: 'DashboardPage', icon: 'home',isHead:false },
    { title: 'Profile', component: 'ProfilePage', icon: 'person' ,isHead:false},
    { title: 'Attendance', component: 'AttendancePage', icon: 'clock',isHead:false },
    { title: 'Time Table', component: 'TimeTablePage', icon: 'clipboard',isHead:false },
    { title: 'Today Punching', component: 'TodayPunchingPage', icon: 'finger-print' ,isHead:false},
    { title: 'Leaves', component: 'LeavesPage', icon: 'sunny' ,isHead:false},
    { title: 'Excuses', component: 'ExcusesPage', icon: 'walk',isHead:false },
    { title: 'Duties', component: 'DutiesPage', icon: 'briefcase',isHead:false },
    { title: 'Request Status', component: 'RequestStatusPage', icon: 'trending-up',isHead:false },
    { title: 'Submit execuse', component: 'SubmitExecusePage', icon: 'calendar',isHead:false },
    { title: 'Manula Adjustment Request', component: 'ManulaAdjustmentPage', icon: 'alarm',isHead:false },
    { title: 'Submit Leave Request', component: 'LeaveRequestPage', icon: 'albums',isHead:false },
    { title: 'Geo Punching', component: 'PunchingPage', icon: 'map',isHead:false },
    { title: 'Web Requests', component: 'WebRequestPage', icon: 'globe',isHead:false },
    { title: 'Change Password', component: 'ChangePasswordPage', icon: 'key',isHead:false },
    { title: 'Logout', component: '', icon: 'power',isHead:false },

  ]

  constructor(private translate: TranslateService, public storage: Storage, public Myconfig: config, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  Logout() {
    this.storage.set(this.Myconfig.Username_Key, "");
    this.storage.set(this.Myconfig.Password_Key, "");
    this.nav.push("WelcomePage");
    this.nav.setRoot("WelcomePage");
  }

  openPage(page) {
    if (page.title == "Logout") {
      this.Logout();
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    this.nav.push(page.component);
  }
}
