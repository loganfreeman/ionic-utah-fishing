import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiNativeProvider } from './../../providers/api-native/api-native';
/**
 * Generated class for the SpeciesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-species',
  templateUrl: 'species.html',
})
export class SpeciesPage {
  items: Observable<any>;
  loading: Loading  = this.loadingCtrl.create({
    spinner: 'hide',
    content: 'Loading Please Wait...'
  });

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public apiProvider: ApiNativeProvider) {
  }

  ionViewDidLoad() {
    this.items = this.apiProvider.getFishingSpecies();
  }

  presentLoadingText() {
    this.loading.present();
  }

}
