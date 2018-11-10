import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    TranslateModule.forChild()
  ],
  exports: [
    LoginPage
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginPageModule { }
