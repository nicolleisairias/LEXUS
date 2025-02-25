import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdministradorComponent } from './pages/home-administrador/home-administrador.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegisterComponent } from './Componentes/register/register.component';
import { LoginComponent } from './Componentes/login/login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', component: InicioComponent, 
  ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },
  {
    path: 'register',component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  // {
  //   path: 'admin',
  //   children: [
  //     { path: 'home', component: HomeAdministradorComponent }
  //   ]
  // },

 
  // {
  //   path: 'cliente',
  //   loadChildren: () => import('../app/pages/home-cliente/cliente.module')
  //     .then(m => m.ClienteModule)
  // },
  // {
  //   path: 'empleado',
  //   loadChildren:() => import('../app/pages/home-empleado/empleado.module')
  //   .then(m => m.EmpleadoModule)
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
