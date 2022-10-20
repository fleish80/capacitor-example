import {Component, OnInit} from '@angular/core';
import {Geolocation} from '@capacitor/geolocation';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'capacitor-example-geolocation',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <pre>{{locationData | json}}</pre>
    <button (click)="getLocation()">Where in the world am I</button>
  `,
  styles: []
})
export class GeolocationComponent implements OnInit {

  locationData?: { longitude: number, latitude: number };

  async ngOnInit() {
    await Geolocation.requestPermissions();
  }

  async getLocation() {
    const {coords} = await Geolocation.getCurrentPosition();
    this.locationData = {
      longitude: coords.longitude,
      latitude: coords.latitude
    }
  }

}
