import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeClienteComponent } from "./home-cliente.component";
import { BusquedaInmueblesComponent } from "./busqueda-inmuebles/busqueda-inmuebles.component";
import { AgendarCitaComponent } from "./agendar-cita/agendar-cita.component";
import { GestionarInmueblesComponent } from "./gestionar-inmuebles/gestionar-inmuebles.component";
import { PagosComponent } from "./pagos/pagos.component";

const routes: Routes = [
    {
      path: '',
      component: HomeClienteComponent,
      children: [
        { path: 'buscar-inmuebles', component: BusquedaInmueblesComponent },
        { path: 'agendar-cita', component: AgendarCitaComponent },
        { path: 'gestionar-inmuebles', component: GestionarInmueblesComponent },
        { path: 'pagos', component: PagosComponent }
      ]
    }
];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ClienteRoutingModule { }