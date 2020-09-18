import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() origin: any;
  @Input() destination: any;
  lat: number = 19.7769227;
  lng: number = -104.3691476;
  zoom: number = 9;
  constructor() { }

  ngOnInit(): void {
    this.destination='antonio borbón 145 autlán de navarro jalisco'
  }


  
}
