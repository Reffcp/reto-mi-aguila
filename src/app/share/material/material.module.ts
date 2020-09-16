import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule
  ]
})
export class MaterialModule { }
