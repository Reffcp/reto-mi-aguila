import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelSelectorComponent } from './travel-selector.component';
import { MaterialModule } from '../../material/material.module';
import { MapComponent } from '../map/map.component';



@NgModule({
  declarations: [TravelSelectorComponent,MapComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class TravelSelectorModule { }
