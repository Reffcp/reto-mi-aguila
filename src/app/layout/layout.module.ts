import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../share/material/material.module';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [LayoutComponent,SidebarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSN-kG1piDGIRaDgU9JfqJ8R6TUInwyH0'
    })
  ]
})
export class LayoutModule { }
