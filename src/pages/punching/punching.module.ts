import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PunchingPage } from './punching';

@NgModule({
  declarations: [
    PunchingPage,
  ],
  imports: [
    IonicPageModule.forChild(PunchingPage),
  ],
})
export class PunchingPageModule {}
