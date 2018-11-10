import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestBingMapsPage } from './test-bing-maps';

@NgModule({
  declarations: [
    TestBingMapsPage,
  ],
  imports: [
    IonicPageModule.forChild(TestBingMapsPage),
  ],
})
export class TestBingMapsPageModule {}
