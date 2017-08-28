import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockingPage } from './stocking';

@NgModule({
  declarations: [
    StockingPage,
  ],
  imports: [
    IonicPageModule.forChild(StockingPage),
  ],
})
export class StockingPageModule {}
