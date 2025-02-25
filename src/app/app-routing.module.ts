import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdministradorComponent } from './pages/home-administrador/home-administrador.component';

import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'admin',
    children: [
      { path: 'home', component: HomeAdministradorComponent }
    ]
  },
  {
    path: 'cliente',
    loadChildren: () => import('../app/pages/home-cliente/cliente.module')
      .then(m => m.ClienteModule)
  },
  {
    path: 'empleado',
    loadChildren:() => import('../app/pages/home-empleado/empleado.module')
    .then(m => m.EmpleadoModule)
  },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
