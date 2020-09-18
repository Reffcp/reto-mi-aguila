import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { OrigenComponent } from './origen/origen.component';
import { DestinoComponent } from './destino/destino.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: 'origen'
      },
      {
        path: 'origen',
        component: OrigenComponent
      },
      {
        path: 'destino/:origen',
        component: DestinoComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
