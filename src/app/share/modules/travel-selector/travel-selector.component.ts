import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteLocation } from '../../interfaces/favorite-location';
import { LocationsService } from '../../services/locations.service';

@Component({
  selector: 'app-travel-selector',
  templateUrl: './travel-selector.component.html',
  styleUrls: ['./travel-selector.component.scss']
})
export class TravelSelectorComponent implements OnInit {
  @Input() typeClient: number;
  @Input() stage: number;
  @Input() origin: any;
  @Input() destination: any;
  @Input() nextUrl: any;
  @Input() buttonType: any;
  
  favoriteLocations:FavoriteLocation[] = []
  panelOpenState:boolean = true;
  iconButton:string="arrow_forward"
  constructor(public locationService:LocationsService,public router:Router) { }
  
  ngOnInit(): void {
    this.locationService.getFavoriteLocations()
    .subscribe((data:FavoriteLocation[]) => {
      this.favoriteLocations=data;
    })
    if (this.buttonType!='back') {
      this.iconButton="arrow_forward"
    } else {
      this.iconButton="arrow_back"
    }
  }

  setDirection(address) {
    if (this.stage==1) {
      this.origin=address;
    } else if (this.stage==2) {
      this.destination=address;
    }
  }

  gotoURL(){
    if (this.buttonType=="next") {
      this.router.navigate([this.nextUrl,JSON.stringify(this.origin)]);
    } else {
      this.router.navigate([this.nextUrl]);
    }
    
  }

  searchLocation(address){
    if (this.stage==1) {
      this.origin=address;
    } else if (this.stage==2) {
      this.destination=address;
    }
  }

  verifiTypeClient(number){
    switch (number==this.typeClient) {
      case true:
        return 'background-color: #e1fcf5; border-radius: 50px;'
    
      default:
        return ''
    }
    
  }

  verifiStage(number){
    switch (number==this.stage) {
      case true:
        return ''
    
      default:
        return 'display: none;'
    }
    
  }

  changeTypeClient(typeClient){
    this.typeClient=typeClient;
  }
  
}