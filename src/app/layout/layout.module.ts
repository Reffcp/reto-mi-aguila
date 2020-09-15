import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../share/material/material.module';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [LayoutComponent,SidebarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
