import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root: string = 'AboutPage';
  tab3Root: string = 'ContactPage';

  constructor() {

  }
}
