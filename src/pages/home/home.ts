import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapRef: ElementRef;
  @ViewChild('search') searchRef: ElementRef;
  map: any;
  public recommendations: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recommendations = [
      {
        id: 1,
        name: 'Evento do Ciclano',
        description: 'O Evento Ciclano possui um ambiente agradável, adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      }, {
        id: 1,
        name: 'Bar do Fulano',
        description: 'O Bar Fulano possui um ambiente agradável, adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      }, {
        id: 1,
        name: 'Bar do Beltrano',
        description: 'O Teatro Beltrano possui um ambiente agradável, adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      }
    ]
  }

  ionViewDidLoad() {
    // this.loadMap();
    // this.initAutocomplete();
  }

  loadMap() {
    const location = new google.maps.LatLng(51.507351,-0.127758);

    const options = {
      center: location,
      zoom: 15,
      mapTypeControl: false
    };

    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(location, map);
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    })
  }

  initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap'
    });

    var input = document.getElementById('search');
    var searchBox = new google.maps.places.SearchBox(input);

    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];

    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }
}
