import { NgModule } from '@angular/core';
import { FishingPage} from './fishing';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [FishingPage],
  imports: [IonicPageModule.forChild(FishingPage)],
  entryComponents: [FishingPage]
})
export class FishingPageModule { }
