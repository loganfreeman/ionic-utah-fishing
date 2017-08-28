import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeciesPage } from './species';

@NgModule({
  declarations: [
    SpeciesPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeciesPage),
  ],
})
export class SpeciesPageModule {}
