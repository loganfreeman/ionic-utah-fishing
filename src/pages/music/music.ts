import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as howler from 'howler';


@Component({
  selector: 'page-music',
  templateUrl: 'music.html'
})
export class MusicPage {

  music:any;
  image:string;

  constructor(public navCtrl: NavController, public params: NavParams) {

  }


  ionViewDidLoad() {
    let audioFile = this.params.get('audio');
    this.music = new howler.Howl({ src: [`assets/music/${audioFile}.mp3`]});
    this.image = `assets/img/${audioFile}.jpg`;
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
