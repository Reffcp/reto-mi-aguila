import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from 'src/app/share/services/locations.service';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.scss']
})
export class DestinoComponent implements OnInit {
  panelOpenState = true;
  origin:any;
  destination:any;
  
  constructor(public locationService:LocationsService,public activatedRoute:ActivatedRoute, public router:Router) { }
  
  ngOnInit(): void {
    this.origin=JSON.parse(this.activatedRoute.snapshot.paramMap.get('origen'));
    this.locationService.getDemoTravel()
    .subscribe((data:any) => {
      this.destination=data.destination;
    })
  }

  
}
