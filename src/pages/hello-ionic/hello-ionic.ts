import { Component, ViewChild ,ElementRef } from '@angular/core';

import { IonicPage, NavController } from 'ionic-angular';

import { MusicPage } from '../music/music';

import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';

import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

declare var google;

@IonicPage()
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  options : GeolocationOptions;
  currentPos : Geoposition;
  googleMap: GoogleMap;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, private geolocation : Geolocation, private googleMaps: GoogleMaps) {

  }

  ionViewDidEnter(){
      //this.getUserPosition();
      //this.loadMap();
  }

  loadMap() {
    // let element: HTMLElement = document.getElementById('map');
    this.googleMap = this.googleMaps.create(this.mapElement.nativeElement);
      // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    this.googleMap.one(GoogleMapsEvent.MAP_READY).then(
      () => {
        console.log('Map is ready!');
        this.getMyLocation();
      }
    );
  }

  getMyLocation() {
    this.googleMap.getMyLocation().then(position => {
      console.log(position);
      this.moveToPosition(position);
    })
  }

  moveToPosition(location) {
    // create CameraPosition
     let position: CameraPosition = {
       target: {
         lat: location.latLng.lat,
         lng: location.latLng.lng
       },
       zoom: 18,
       tilt: 30
     };
    // move the map's camera to position
    this.googleMap.moveCamera(position);

    // create new marker
    let markerOptions: MarkerOptions = {
      position: {
        lat: location.latLng.lat,
        lng: location.latLng.lng
      },
      title: 'My Location'
    };

    this.googleMap.addMarker(markerOptions)
      .then((marker: Marker) => {
         marker.showInfoWindow();
       });
    }


  getUserPosition(){
      this.options = {
          enableHighAccuracy : true
      };

      this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

          this.currentPos = pos;
          console.log(pos);
          this.addMap(pos.coords.latitude,pos.coords.longitude);

      },(err : PositionError)=>{
          console.log("error : " + err.message);
      });
  }

  addMap(lat,long){

      let latLng = new google.maps.LatLng(lat, long);

      let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker();

  }

  addMarker(){

      let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
      });

      let content = "<p>This is your current position !</p>";
      let infoWindow = new google.maps.InfoWindow({
      content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      });

  }

  goToMusicPage(audio){
    this.navCtrl.push(MusicPage, {audio});
  }
}
