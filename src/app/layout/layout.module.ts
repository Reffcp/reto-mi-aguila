import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../share/material/material.module';
import { OrigenComponent } from './origen/origen.component';
import { DestinoComponent } from './destino/destino.component';
import { FormsModule } from '@angular/forms';
import { TravelSelectorComponent } from '../share/modules/travel-selector/travel-selector.component';
import { MapComponent } from '../share/modules/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';



@NgModule({
  declarations: [LayoutComponent,SidebarComponent, OrigenComponent, DestinoComponent,TravelSelectorComponent,MapComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSN-kG1piDGIRaDgU9JfqJ8R6TUInwyH0'
    }),
    AgmDirectionModule,
  ]
})
export class LayoutModule { }
