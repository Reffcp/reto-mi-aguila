import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuElements = [
    {
      icon: 'drive_eta',
      text: 'Pedir Águila',
      link: '/',
    },
    {
      icon: 'place',
      text: 'Vuelos',
      link: '/',
    },
    {
      icon: 'directions',
      text: 'Rutas',
      link: '/',
    },
    {
      icon: 'admin_panel_settings',
      text: 'Administrar',
      link: '/',
    },
    {
      icon: 'analytics',
      text: 'Estadísticas',
      link: '/',
    },
    {
      icon: 'payment',
      text: 'Medios de Pago',
      link: '/',
    },
    {
      icon: 'login',
      text: 'Cerrar sesión',
      link: '/',
    },
  ]
  
  

  public origin: any;
  public destination: any;
  //geocoder = new google.maps.Geocoder();
  constructor() {
  }

  ngOnInit(): void {
  }
}
