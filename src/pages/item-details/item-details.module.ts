import { NgModule } from '@angular/core';
import { ItemDetailsPage} from './item-details';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ItemDetailsPage],
  imports: [IonicPageModule.forChild(ItemDetailsPage)],
  entryComponents: [ItemDetailsPage]
})
export class ItemDetailsPageModule { }
