import { Component, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent } from '@ionic-native/google-maps';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GoogleMaps]
})
export class HomePage {

  zoom = 18;
  tilt = 15;
  map: GoogleMap;
  menuActive: string = 'menu';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private googleMaps: GoogleMaps, public menu: MenuController) {
      // this.menu.enable(true, 'menu');
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

        this.map.addMarker({
          'position': {
            lat: -22.894837,
            lng: -43.294115
          },
        }).then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              this.navCtrl.push("AvaliacaoPage");
            });
        });
      });
  }

}
