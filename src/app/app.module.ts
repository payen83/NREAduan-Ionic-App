import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { UtamaPage } from '../pages/utama/utama';
import { AduanBaruPage } from '../pages/aduan-baru/aduan-baru';
import { SemakanPage } from '../pages/semakan/semakan';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { HubungiPage } from '../pages/hubungi/hubungi';
import { PentadbirPage } from '../pages/pentadbir/pentadbir';
import { KemaskiniPage } from '../pages/kemaskini/kemaskini';
import { LoginPage } from '../pages/login/login';
import { DaftarPage } from '../pages/daftar/daftar';
import { Camera } from '@ionic-native/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    UtamaPage,
    AduanBaruPage,
    SemakanPage,
    TabsControllerPage,
    HubungiPage,
    PentadbirPage,
    KemaskiniPage,
    LoginPage,
    DaftarPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UtamaPage,
    AduanBaruPage,
    SemakanPage,
    TabsControllerPage,
    HubungiPage,
    PentadbirPage,
    KemaskiniPage,
    LoginPage,
    DaftarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    Camera
  ]
})
export class AppModule {}