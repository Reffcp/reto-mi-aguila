import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat: number = 19.7769227;
  lng: number = -104.3691476;
  zoom: number = 9;
  origin:any;
  destination:any;
  constructor() { }

  ngOnInit(): void {
  }


  getDirection(destino) {
    this.origin = { lat: this.lat, lng: this.lng };
    this.destination = destino;
  }

}
