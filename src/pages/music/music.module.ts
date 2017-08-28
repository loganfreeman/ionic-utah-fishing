import { NgModule } from '@angular/core';
import { MusicPage} from './music';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [MusicPage],
  imports: [IonicPageModule.forChild(MusicPage)],
  entryComponents: [MusicPage]
})
export class MusicPageModule { }
