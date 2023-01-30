import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  mapOptions: google.maps.MapOptions = {
    center: { lat: 42.9987208, lng: -77.2538699 },
    zoom: 14,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  markers = [
    {
      position: { lat: 42.9987208, lng: -77.2638999 },
    },
    {
      position: { lat: 42.987409, lng: -77.2538501 },
    },
    {
      position: { lat: 42.9987311, lng: -77.2438059 },
    },
    {
      position: { lat: 42.9987311, lng: -77.2338059 },
    },
    {
      position: { lat: 42.9922311, lng: -77.2887959 },
    },
  ];
}
@NgModule({
  imports: [CommonModule, GoogleMapsModule],
  declarations: [MapComponent],
  exports: [MapComponent],
})
export class MapComponentModule {}
