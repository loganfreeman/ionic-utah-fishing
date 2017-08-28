import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FishingOptionsPage } from './fishing-options';

@NgModule({
  declarations: [
    FishingOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(FishingOptionsPage),
  ],
})
export class FishingOptionsPageModule {}
