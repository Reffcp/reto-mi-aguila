import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocationsService {
  constructor(public httpClient:HttpClient) { }

  getFavoriteLocations(){
    return this.httpClient.get('../../assets/favorite-locations.json');
  }

  getDemoTravel(){
    return this.httpClient.get('../../assets/travel-test.json');
  }

}
