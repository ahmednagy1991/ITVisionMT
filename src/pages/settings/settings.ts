import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Settings } from '../../providers';
import { File } from '@ionic-native/file';
import { AlertController } from 'ionic-angular';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { config } from '../../providers/Config';
import { Storage } from '@ionic/storage';
import { Heplers } from '../../providers/Helper/Helpers';
import { Platform } from 'ionic-angular';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // Our local settings object
  options: any;
  MainURL: string;
  settingItem: { mainurl: string } = {
    mainurl: ''

  };


  settingsReady = false;

  form: FormGroup;

  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;

  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService,
    private qrScanner: QRScanner,
    private file: File,
    public platform: Platform,
    public alertCtrl: AlertController, public helper: Heplers, public Config: config, public storage: Storage) {
  
    this.storage.get(this.Config.MainURL_Key).then(res => this.settingItem.mainurl = res);

  }

  _buildForm() {
    let group: any = {
      ServiceURL: this.MainURL,
      option1: [this.options.option1],
      option2: [this.options.option2],
      option3: [this.options.option3]
    };

    switch (this.page) {
      case 'main':
        break;
      case 'profile':
        group = {
          option4: [this.options.option4]
        };
        break;
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.settings.merge(this.form.value);
    });
  }


  scanServiceURL() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted

          this.helper.showMessage("Authorized", 'Error is');
          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });
          this.qrScanner.show();

        } else if (status.denied) {
          this.helper.showMessage("Denied", 'Error is');
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => this.helper.showMessage(e, 'Error is'));
  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});
  }

  ionViewWillEnter() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    this.translate.get(this.pageTitleKey).subscribe((res) => {
      this.pageTitle = res;
    })

    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      this._buildForm();
    });
  }


  saveSettings() {
    //debugger;
    //var temp2222=this.config.MainURL_Key;
    //  let temp = this.settingItem.mainurl;
    //this.storage.remove(this.config.MainURL_Key); 
    this.helper.presentToast("Please Wait While Saving changes then restart application.....", 8000);
    this.storage.set(this.Config.MainURL_Key, this.settingItem.mainurl);
    setTimeout(() => {
      this.platform.exitApp();
       // this.navCtrl.setRoot('WelcomePage');
      // this.navCtrl.push('WelcomePage');
      //this.storage.get(this.config.MainURL_Key).then(res=> console.log('Main URL VAlue', res)); 
    }, 9000);

    //this.storage.get(this.config.MainURL_Key).then(res=> console.log('Main URL VAlue', res));
    //window.location.reload();
    // this.navCtrl.push('WelcomePage')
    //this.navCtrl.setRoot('WelcomePage');

    // window.location.reload()




    //debugger;
    //this.file.writeFile(this.file.dataDirectory, "SettingFile",this.settingItem.mainurl);
    //this.file.createFile(this.file.dataDirectory, "SettingFile",true);
    //this.file.checkFile(this.file.dataDirectory, "SettingFile").then(_ => this.saveSettingsConfirmation("File Found")).catch(err => this.saveSettingsConfirmation(err));
  }



  saveSettingsConfirmation(message: string) {
    const alert = this.alertCtrl.create({
      title: "",
      subTitle: '',
      buttons: ['OK']
    });

    this.translate.get("SetConfTitle").subscribe((res) => {
      alert.setTitle(res);
    });
    if (typeof message != 'undefined' && message) {
      alert.setSubTitle(message);

    }
    else {
      this.translate.get("SetConfBody").subscribe((res) => {
        alert.setSubTitle(res);
      })
    }


    alert.present();
  }


  ngOnChanges() {

    console.log('Ng All Changes');
  }
}
