import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Globalization } from '@ionic-native/globalization';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  MyLocation
} from '@ionic-native/google-maps';
/**
 * Generated class for the PunchingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare const google;
@IonicPage()
@Component({
  selector: 'page-punching',
  templateUrl: 'punching.html',
})
export class PunchingPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  CurrentAddress: string;
  CurrentTime:string;
  enablePunchingButtons: boolean = false;
  EnableButtons: boolean = false;
  MyLocation: { Latitude: number, Longitude: number } = { Latitude: 0, Longitude: 0 };
  Address: { countryCode: string, countryName: string, administrativeArea: string, subAdministrativeArea: string, locality: string, thoroughfare: string }
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;


  constructor(public navCtrl: NavController, private globalization: Globalization, private nativeGeocoder: NativeGeocoder, private geolocation: Geolocation, public navParams: NavParams, private _googlemap: GoogleMaps) {

    this.globalization.getPreferredLanguage()
      .then(res =>this.CurrentTime=res.value)
      .catch(e => console.log(e));

  }


  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: { lat: this.MyLocation.Latitude, lng: this.MyLocation.Longitude },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var position = new google.maps.LatLng(this.MyLocation.Latitude, this.MyLocation.Longitude);

    var dogwalkMarker = new google.maps.Marker({ position: position, title: "MyLocation" });
    dogwalkMarker.setMap(this.map);

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    // this.nativeGeocoder.reverseGeocode(this.MyLocation.Latitude, this.MyLocation.Longitude, options)
    //   .then((result: NativeGeocoderReverseResult[]) =>
    //     this.CurrentAddress = JSON.stringify(result[0]))
    //   .catch((error: any) => console.log(error));

    this.nativeGeocoder.reverseGeocode(this.MyLocation.Latitude, this.MyLocation.Longitude, options)
      .then((result: NativeGeocoderReverseResult[]) =>
        this.Address = result[0])
      .catch((error: any) => console.log(error));


    this.enablePunchingButtons = true;
    this.directionsDisplay.setMap(this.map);
  }

  ionViewDidLoad() {

    this.geolocation.getCurrentPosition().then((resp) => {
      debugger;
      this.MyLocation.Latitude = resp.coords.latitude;
      this.MyLocation.Longitude = resp.coords.longitude;
      this.initMap();
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    // let posMaceio = { lat: -9.648139, lng: -35.717239 }
    // this.map = new google.maps.Map(this.mapElement.nativeElement, {
    //     zoom: 8,
    //     center: posMaceio,
    //     mapTypeId: 'mapss'
    // });

    // this.map.setCenter(posMaceio);

    // this.initMap();
    //let emenlent=this.mapElement.nativeElement;
    // this.map=this._googlemap.create(emenlent);
    // this.loadMap();
    console.log('ionViewDidLoad PunchingPage');
  }

  loadMap() {
    //debugger;
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('mapsss', mapOptions);

    // let marker: Marker = this.map.addMarkerSync({
    //   title: 'Ionic',
    //   icon: 'blue',
    //   animation: 'DROP',
    //   position: {
    //     lat: 43.0741904,
    //     lng: -89.3809802
    //   }
    // });
    // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //   alert('clicked');
    // });
  }
}
