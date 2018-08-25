import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DutiesPage } from './duties';

@NgModule({
  declarations: [
    DutiesPage,
  ],
  imports: [
    IonicPageModule.forChild(DutiesPage),
  ],
})
export class DutiesPageModule {}
