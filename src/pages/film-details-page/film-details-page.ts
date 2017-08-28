import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import * as howler from 'howler';

@IonicPage()
@Component({
  selector: 'page-film-details-page',
  templateUrl: 'film-details-page.html'
})
export class FilmDetailsPage {

  film: any;
  music:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = this.navParams.get('film');
  }

  ionViewDidLoad() {
    let audioFile = this.film.previewUrl;
    this.music = new howler.Howl({ src: [`${audioFile}`]});
  }

  ionViewWillEnter(){
    this.music.play();
    this.music.loop(true);
  }

  ionViewDidLeave(){
    this.music.pause();
  }

  ionViewWillUnload() {
    this.music.stop();
    this.music = null;
  } 

}
