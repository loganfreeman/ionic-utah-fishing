import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

/**
 * Generated class for the FishingOptionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  template: `
    <ion-list>
      <ion-list-header>Filter by choosing</ion-list-header>
      <button ion-item (click)="presentModal('StatusPage')" icon-end>
      <ion-icon name="md-star"></ion-icon>
      Status
      </button>
      <button ion-item (click)="presentModal('DistancePage')" icon-end>
      <ion-icon name="md-navigate"></ion-icon>
      Distance
      </button>
    </ion-list>
  `
})
export class FishingOptionsPage {

  status:string;
  distance:number;

  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController) {}

  close(data) {
    this.viewCtrl.dismiss(data);
  }

  presentModal(page) {
    let dialog = this.modalCtrl.create(page);
    dialog.present();
    dialog.onDidDismiss(data => {
      console.log(data);
      switch(page) {
        case 'StatusPage':
        this.status = data;
        this.close({
          status: data
        })
        break;
        case 'DistancePage':
        this.distance = data;
        this.close({
          distance: data
        })
        break;
      }

    });
  }

}
