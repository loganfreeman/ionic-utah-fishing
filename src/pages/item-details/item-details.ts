import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { IonicPage } from 'ionic-angular';

import { ApiNativeProvider } from './../../providers/api-native/api-native';

import { Observable } from 'rxjs/Observable';

import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  detail: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiNativeProvider, private launchNavigator: LaunchNavigator) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.detail = this.apiProvider.getHotSpotDetail(this.selectedItem.link);
  }

  navigate(latitude, longitude) {
    console.log(latitude, longitude);
    this.launchNavigator.navigate([latitude, longitude]);
  }
  
}
