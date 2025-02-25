import { NgModule } from "@angular/core";
import { HomeClienteComponent } from "./home-cliente.component";
import { ClienteRoutingModule } from "./cliente-routing.module";
import { CommonModule } from "@angular/common";
import { BusquedaInmueblesComponent } from "./busqueda-inmuebles/busqueda-inmuebles.component";
import { AgendarCitaComponent } from "./agendar-cita/agendar-cita.component";
import { GestionarInmueblesComponent } from "./gestionar-inmuebles/gestionar-inmuebles.component";
import { PagosComponent } from "./pagos/pagos.component";


@NgModule({
    declarations: [
     
    ],
    imports: [
        CommonModule,
        ClienteRoutingModule,
        HomeClienteComponent 
    ]
})
export class ClienteModule { }