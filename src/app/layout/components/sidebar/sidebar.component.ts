import { Component, OnInit } from '@angular/core';
import { MapsService } from 'src/app/share/services/maps/maps.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuElements=[
    {
      icon:'drive_eta',
      text:'Pedir Águila',
      link:'/',
    },
    {
      icon:'place',
      text:'Vuelos',
      link:'/',
    },
    {
      icon:'directions',
      text:'Rutas',
      link:'/',
    },
    {
      icon:'admin_panel_settings',
      text:'Administrar',
      link:'/',
    },
    {
      icon:'analytics',
      text:'Estadísticas',
      link:'/',
    },
    {
      icon:'payment',
      text:'Medios de Pago',
      link:'/',
    },
    {
      icon:'login',
      text:'Cerrar sesión',
      link:'/',
    },
  ]
  favoriteLocations=[
    {
      name:'Ivesur',
      address:'Cra. 56 #19-84, Bogotá, Colombia',
    },
    {
      name:'Mi Águila',
      address:'Carrera 15 80-90, bogotá',
    },
    {
      name:'Aeropuerto el Dorado',
      address:'Bogotá, Colombia',
    },
    {
      name:'Work',
      address:'Carrera 15 80-90, bogotá',
    },
    {
      name:'Home',
      address:'Antonio borbón 265, Autlán de Navarro, Jalisco.',
    },
  ]
  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  panelOpenState = true;

  constructor(public mapService:MapsService) { }

  ngOnInit(): void {
    this.mapService.getPosition().subscribe(
      (pos: Position) => {
            this.lat=pos.coords.latitude;
            this.lng=pos.coords.longitude;
          
      });
      
  }

}
