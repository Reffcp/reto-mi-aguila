import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/share/services/locations.service';

@Component({
  selector: 'app-origen',
  templateUrl: './origen.component.html',
  styleUrls: ['./origen.component.scss']
})
export class OrigenComponent implements OnInit {
  favoriteLocations = [
    {
      name: 'Home',
      address: 'Antonio borbón 265, Autlán de Navarro, Jalisco.',
    },
    {
      name: 'Universidad',
      address: 'av. idependencia nacional 151 autlan de navarro',
    },
    {
      name: 'Caja popular',
      address: 'Calle Ignacio Allende 133 Centro 48900 Autlán de Navarro, Jal. México',
    },
    {
      name: 'Coppel Corona',
      address: 'alle Corona Araiza #32 Centro 48900 Autlán de Navarro, Jal',
    },
    {
      name: 'Trabajo',
      address: 'Margarito González Rubio 33 Centro Autlán de Navarro, Jal',
    },
    
  ]

  panelOpenState = true;
  
  constructor(public locationService:LocationsService) { }
  
  ngOnInit(): void {
    this.favoriteLocations=this.locationService.getFavoriteLocations();
  }

  
}
