import { Component } from '@angular/core';
import { GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { NavController, NavParams } from 'ionic-angular';
declare var cordova: any

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GoogleMaps]
})
export class HomePage {

  zoom = 18;
  tilt = 15;
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
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
          this.map.moveCamera({
            'target': local.latLng,
            'tilt': this.tilt,
            'zoom': this.zoom,
          })
          console.log("cordova",cordova)    
          cordova.plugins.GooglePlaces.currentPlace(
            // place contains the API result
            place => {
              console.log(place);
              //   {
              //    place: {
              //      name: "some place name",
              //      placeID: "XXXXX"
              //    },
              //    likehood: 0.87 // <= means 87% accurate
              //   }
            },
            err => console.log(err)
          );
        });
      })
  }
}