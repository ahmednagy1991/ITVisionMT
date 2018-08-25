import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebRequestPage } from './web-request';

@NgModule({
  declarations: [
    WebRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(WebRequestPage),
  ],
})
export class WebRequestPageModule {}
