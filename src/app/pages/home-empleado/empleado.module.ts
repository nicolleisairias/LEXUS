import { NgModule } from "@angular/core";
import { GestionarInmueblesComponent } from "./gestionar-inmuebles/gestionar-inmuebles.component";
import { AnalisisRiesgoComponent } from "./analisis-riesgo/analisis-riesgo.component";
import { ComisionesComponent } from "./comisiones/comisiones.component";
import { CommonModule } from "@angular/common";
import { HomeEmpleadoComponent } from "./home-empleado.component";
import { EmpleadoRoutingModule } from "./empleado-routing.module";
import { GestionarClientesComponent } from "./gestionar-clientes/gestionar-clientes.component";


@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        EmpleadoRoutingModule,
        HomeEmpleadoComponent,

    ]
})
export class EmpleadoModule{ }