import { NgModule } from '@angular/core';
import { HelloIonicPage} from './hello-ionic';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [HelloIonicPage],
  imports: [IonicPageModule.forChild(HelloIonicPage)],
  entryComponents: [HelloIonicPage]
})
export class HelloIonicPageModule { }
