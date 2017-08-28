import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeciesDetailPage } from './species-detail';

@NgModule({
  declarations: [
    SpeciesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeciesDetailPage),
  ],
})
export class SpeciesDetailPageModule {}
