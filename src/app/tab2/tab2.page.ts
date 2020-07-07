// import { Component, ViewChild, ElementRef } from '@angular/core';

// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

// declare var google;

// @Component({
//   selector: 'app-tab2',
//   templateUrl: 'tab2.page.html',
//   styleUrls: ['tab2.page.scss']
// })
// export class Tab2Page {

//   @ViewChild('map', { static: false }) mapElement: ElementRef;
//   map: any;
//   address: string;

//   latitude: number;
//   longitude: number;

//   constructor(
//     private geolocation: Geolocation,
//     private nativeGeocoder: NativeGeocoder) {
//   }


//   ngOnInit() {
//     this.loadMap();
//   }

//   loadMap() {
//     this.geolocation.getCurrentPosition().then((resp) => {

//       this.latitude = resp.coords.latitude;
//       this.longitude = resp.coords.longitude;

//       let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
//       let mapOptions = {
//         center: latLng,
//         zoom: 15,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//       }

//       this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

//       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

//       this.map.addListener('dragend', () => {

//         this.latitude = this.map.center.lat();
//         this.longitude = this.map.center.lng();

//         this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
//       });

//     }).catch((error) => {
//       console.log('Error getting location', error);
//     });
//   }

//   getAddressFromCoords(lattitude, longitude) {
//     console.log("getAddressFromCoords " + lattitude + " " + longitude);
//     let options: NativeGeocoderOptions = {
//       useLocale: true,
//       maxResults: 5
//     };

//     this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
//       .then((result: NativeGeocoderResult[]) => {
//         this.address = "";
//         let responseAddress = [];
//         for (let [key, value] of Object.entries(result[0])) {
//           if (value.length > 0)
//             responseAddress.push(value);

//         }
//         responseAddress.reverse();
//         for (let value of responseAddress) {
//           this.address += value + ", ";
//         }
//         this.address = this.address.slice(0, -2);
//       })
//       .catch((error: any) => {
//         this.address = "Address Not Available!";
//       });

//   }

// }



// import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';

// declare var google;

// @Component({
//   selector: 'app-tab2',
//   templateUrl: 'tab2.page.html',
//   styleUrls: ['tab2.page.scss']
// })
// export class Tab2Page implements OnInit, AfterViewInit {
//   @ViewChild('mapElement') mapNativeElement: ElementRef;
//   directionsService = new google.maps.DirectionsService;
//   directionsDisplay = new google.maps.DirectionsRenderer;
//   directionForm: FormGroup;
 
//   constructor(private fb: FormBuilder) {
//     this.createDirectionForm();
//   }
 
//   ngOnInit() {
//   }
//   createDirectionForm() {
//     this.directionForm = this.fb.group({
//       source: ['', Validators.required],
//       destination: ['', Validators.required]
//     });
//   }
//   ngAfterViewInit(): void {
//     const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
//       zoom: 7,
//       center: {lat: 41.85, lng: -87.65}
//     });
//     this.directionsDisplay.setMap(map);
//   }
//   calculateAndDisplayRoute(formValues) {
//     const that = this;
//     this.directionsService.route({
//       origin: formValues.source,
//       destination: formValues.destination,
//       travelMode: 'DRIVING'
//     }, (response, status) => {
//       if (status === 'OK') {
//         that.directionsDisplay.setDirections(response);
//       } else {
//         window.alert('Directions request failed due to ' + status);
//       }
//     });
//   }
// }




// Routes from current location

import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Geolocation} from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, AfterViewInit {
  @ViewChild('mapElement') mapNativeElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;
  currentLocation: any = {
    lat: 0,
    lng: 0
  };
  constructor(private fb: FormBuilder, private geolocation: Geolocation) {
    this.createDirectionForm();
  }

  ngOnInit() {
  }

  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
    });
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    this.directionsDisplay.setMap(map);
  }

  calculateAndDisplayRoute(formValues) {
    const that = this;
    this.directionsService.route({
      origin: this.currentLocation,
      destination: formValues.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}