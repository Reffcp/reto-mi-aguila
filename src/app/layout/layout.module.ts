import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../share/material/material.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { OrigenComponent } from './origen/origen.component';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [LayoutComponent,SidebarComponent, OrigenComponent, MapComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSN-kG1piDGIRaDgU9JfqJ8R6TUInwyH0'
    }),
    AgmDirectionModule
  ]
})
export class LayoutModule { }
