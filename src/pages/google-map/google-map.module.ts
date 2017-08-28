import { NgModule } from '@angular/core';
import { GoogleMapPage} from './google-map';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [GoogleMapPage],
  imports: [IonicPageModule.forChild(GoogleMapPage)],
  entryComponents: [GoogleMapPage]
})
export class GoogleMapPageModule { }
