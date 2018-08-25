import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExcusesPage } from './excuses';

@NgModule({
  declarations: [
    ExcusesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExcusesPage),
  ],
})
export class ExcusesPageModule {}
