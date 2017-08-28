import { NgModule } from '@angular/core';
import { FilmsPage} from './films-page';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [FilmsPage],
  imports: [IonicPageModule.forChild(FilmsPage)],
  entryComponents: [FilmsPage]
})
export class FilmPageModule { }
