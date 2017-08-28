import { NgModule } from '@angular/core';
import { FilmDetailsPage} from './film-details-page';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [FilmDetailsPage],
  imports: [IonicPageModule.forChild(FilmDetailsPage)],
  entryComponents: [FilmDetailsPage]
})
export class FilmDetailsPageModule { }
