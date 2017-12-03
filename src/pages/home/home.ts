import { Component, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GoogleMaps]
})
export class HomePage {

  zoom = 18;
  tilt = 15;
  map: GoogleMap;
  public recomendados;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
    this.recomendados = [
      {
        id: 1,
        name: 'Local 1',
        description: 'sdfdsfsdfa'
      },{
        id: 2,
        name: 'Local 2',
        description: 'sdfdsfsdfa'
      },{
        id: 3,
        name: 'Local 3',
        description: 'sdfdsfsdfa'
      }
    ];
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      controls: {
        'myLocationButton': true
      }
    };

    this.map = this.googleMaps.create("map_canvas", mapOptions);
    this.map.setMyLocationEnabled(true);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.map.getMyLocation().then(local => {
          console.log(local);
          this.map.moveCamera({
            'target': local.latLng,
            'tilt': this.tilt,
            'zoom': this.zoom,
          })
        })
      });
  }

}
