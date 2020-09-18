import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocationsService {
  private favoriteLocations = [
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
  constructor() { }

  getFavoriteLocations(){
    return this.favoriteLocations;
  }

}
