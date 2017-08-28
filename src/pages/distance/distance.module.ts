import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistancePage } from './distance';

@NgModule({
  declarations: [
    DistancePage,
  ],
  imports: [
    IonicPageModule.forChild(DistancePage),
  ],
})
export class DistancePageModule {}
