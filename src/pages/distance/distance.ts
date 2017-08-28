import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DistancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-distance',
  templateUrl: 'distance.html',
})
export class DistancePage {

  distance:number;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DistancePage');
  }

  distanceChange() {

  }

  dismiss() {
    this.viewCtrl.dismiss(this.distance);
  }

}
