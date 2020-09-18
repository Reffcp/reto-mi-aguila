import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/share/interfaces/travel';
import { LocationsService } from 'src/app/share/services/locations.service';

@Component({
  selector: 'app-origen',
  templateUrl: './origen.component.html',
  styleUrls: ['./origen.component.scss']
})
export class OrigenComponent implements OnInit {
  origin:any;
  destination:any;
  
  constructor(public locationService:LocationsService) { }
  
  ngOnInit(): void {
    this.locationService.getDemoTravel()
    .subscribe((data:Travel) => {
      this.origin=data.origin;
      this.destination=data.destination;
    })
  }

  
}
