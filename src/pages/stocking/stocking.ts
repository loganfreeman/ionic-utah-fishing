import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiNativeProvider } from './../../providers/api-native/api-native';


/**
 * Generated class for the StockingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stocking',
  templateUrl: 'stocking.html',
})
export class StockingPage {
  items: Observable<any>;
  originalItems: Observable<any>;
  keyword: string;
  loading: Loading  = this.loadingCtrl.create({
    spinner: 'hide',
    content: 'Loading Please Wait...'
  });

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public apiProvider: ApiNativeProvider) {
  }

  ionViewDidLoad() {
    this.loadingHotspots();
  }

  setFilter() {
    //console.log(this.keyword);
    if(this.keyword.trim().length === 0) {
      return this.items = this.originalItems;
    }
    let reg;
    try {
      reg = new RegExp(this.keyword, 'i');
    }catch(e) {
      return this.items = this.originalItems;
    }
    return this.items = this.originalItems
         .map(items => items.filter(item => {
           return item.watername.match(reg);
         }));
  }

  loadingHotspots() {
    this.items = this.apiProvider.getStockingReport();
    this.originalItems = this.items;

    this.items.subscribe(response=>{
      this.loading.dismiss();
    });

    this.presentLoadingText();
  }

  presentLoadingText() {
    this.loading.present();
  }

}
