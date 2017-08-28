import { NgModule } from '@angular/core';
import { ActionSheetPage} from './action-sheet';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ActionSheetPage],
  imports: [IonicPageModule.forChild(ActionSheetPage)],
  entryComponents: [ActionSheetPage]
})
export class ActionSheetPageModule { }
