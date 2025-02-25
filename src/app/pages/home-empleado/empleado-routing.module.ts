import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnalisisRiesgoComponent } from "./analisis-riesgo/analisis-riesgo.component";
import { GestionarInmueblesComponent } from "./gestionar-inmuebles/gestionar-inmuebles.component";
import { ComisionesComponent } from "./comisiones/comisiones.component";
import { HomeEmpleadoComponent } from "./home-empleado.component";
import { GestionarClientesComponent } from "./gestionar-clientes/gestionar-clientes.component";

const routes: Routes = [
    {
      path: '', component: HomeEmpleadoComponent,
      children: [
        { path: '', redirectTo: 'gestionar-clientes', pathMatch: 'full' },
        { path: 'gestionar-clientes', component: GestionarClientesComponent },
        { path: 'analisis-riesgo', component: AnalisisRiesgoComponent },
        { path: 'gestionar-inmuebles', component: GestionarInmueblesComponent },
        { path: 'comisiones', component: ComisionesComponent }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class EmpleadoRoutingModule { }  