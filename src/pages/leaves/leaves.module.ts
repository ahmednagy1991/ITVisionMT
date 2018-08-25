import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeavesPage } from './leaves';

@NgModule({
  declarations: [
    LeavesPage,
  ],
  imports: [
    IonicPageModule.forChild(LeavesPage),
  ],
})
export class LeavesPageModule {}
