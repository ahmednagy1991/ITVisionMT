import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayPunchingPage } from './today-punching';

@NgModule({
  declarations: [
    TodayPunchingPage,
  ],
  imports: [
    IonicPageModule.forChild(TodayPunchingPage),
  ],
})
export class TodayPunchingPageModule {}
