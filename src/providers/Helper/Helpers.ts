import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Injectable()
export class Heplers {
    constructor(public toastCtrl: ToastController,public alertCtrl: AlertController) {

    }

    checkURL(res: string) {
        if (res == null || res == undefined|| res=="") {
           return false;
        }
        return true;
    }

    presentToast(Message:string,Duration:number) {
        const toast = this.toastCtrl.create({
          message: Message,
          duration: Duration,
          position:"top"
        });
        toast.present();
      }

    showMessage(MessageBody: string,MessageTitle:string) {
        const alert = this.alertCtrl.create({
            title: MessageTitle,
            subTitle: MessageBody,
            buttons: ['OK']
        });
        alert.present();
    }
}