import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HTTP } from '@ionic-native/http';

import { MusicPage } from '../pages/music/music';

import { HttpModule, JsonpModule } from '@angular/http';

import { LaunchNavigator } from '@ionic-native/launch-navigator';

import { Geolocation } from '@ionic-native/geolocation';

import { GoogleMaps } from '@ionic-native/google-maps';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { ApiNativeProvider } from '../providers/api-native/api-native';

@NgModule({
  declarations: [
    MyApp,
    MusicPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MusicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LaunchNavigator,
    Geolocation,
    GoogleMaps,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    ApiNativeProvider
  ]
})
export class AppModule {}
