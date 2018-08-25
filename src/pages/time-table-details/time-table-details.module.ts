import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeTableDetailsPage } from './time-table-details';

@NgModule({
  declarations: [
    TimeTableDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeTableDetailsPage),
  ],
})
export class TimeTableDetailsPageModule {}
