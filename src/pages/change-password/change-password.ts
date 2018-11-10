import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Heplers } from '../../providers/Helper/Helpers';
import { UserService } from '../../Services/UserService';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  OldPassword: string;
  NewPassword: string;
  ConfirmPassword: string;

  constructor(public usrService: UserService, public helper: Heplers, public navCtrl: NavController, public navParams: NavParams) {
  }

  ChangePassword() {
    if (this.ConfirmPassword != this.NewPassword) {
      this.helper.showMessage("Passwords dose not matched", "Error")
    }
    else {
      this.usrService.ChangePassword(this.OldPassword, this.NewPassword).subscribe((res: any) => {
        if (res.code == 0) {
          this.helper.showMessage("Password has been changed successfully", "Done");
        }
        else {
          this.helper.ShowErrorMessage(res.code);
        }
      });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

}
