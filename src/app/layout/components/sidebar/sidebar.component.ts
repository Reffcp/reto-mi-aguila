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

  openDraw:boolean=true;
  isSmallMobileDevice: MediaQueryList = window.matchMedia("(min-width: 769px)")
  constructor() {
  }

  ngOnInit(): void {
    if (this.isSmallMobileDevice.matches) {
      this.openDraw=true;
    }else{
      this.openDraw=false;
    }
  }

  openMenu(){
    if (this.openDraw) {
      this.openDraw=false;
    } else {
      this.openDraw=true;
    }
  }
}
