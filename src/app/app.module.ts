import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { Http,Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { Device } from '@ionic-native/device';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Globalization } from '@ionic-native/globalization';
import { AttendanceService } from '../Services/AttendanceService'
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { PunchesService } from '../Services/PunchesService';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { LeavesService } from '../Services/LeavesService';
import { TimeTableService } from '../Services/TimeTableService';
import { ExecuseService } from '../Services/ExecuseService';
import { RequestService } from '../Services/RequestService';
import { HelperService } from '../Services/HelperService';
import { UserService } from '../Services/UserService';
import { ModalContentPage } from '../pages/leaves/leaves';
import { ModalTimTablePage } from '../pages/time-table/time-table';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Items } from '../mocks/providers/items';
import { Settings, User, Api } from '../providers';
import { MyApp } from './app.component';
import { File } from '@ionic-native/file';
import { config } from '../providers/Config';
import { Heplers } from '../providers/Helper/Helpers';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    ModalContentPage,
    ModalTimTablePage
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],

  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModalContentPage,
    ModalTimTablePage
  ],
  providers: [
    Api,
    Items,
    QRScanner,
    DecimalPipe,
    DatePipe,
    User,
    AttendanceService,
    AndroidPermissions,
    PunchesService,
    LeavesService,
    Geolocation,
    TimeTableService,
    ExecuseService,
    RequestService,
    HelperService,
    UserService,
    // Http,
    File,
    config,
    Globalization,
    Heplers,
    Camera,
    Device,
    NativeGeocoder,
    SplashScreen,
    GoogleMaps,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
