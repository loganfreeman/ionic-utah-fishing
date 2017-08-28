import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiNativeProvider } from './../../providers/api-native/api-native';

import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the SpeciesDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-species-detail',
  templateUrl: 'species-detail.html',
})
export class SpeciesDetailPage {
  selectedItem: any;

  detail: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiNativeProvider) {
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeciesDetailPage');
  }

}
