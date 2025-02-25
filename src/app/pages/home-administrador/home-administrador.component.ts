import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ɵSharedStylesHost } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent  as ListPersonaComponent} from '../../Componentes/Persona/list/list.component';
import { AddComponent as AddPersonaComponent} from '../../Componentes/Persona/add/add.component';
import { EditComponent as EditPersonaComponent} from '../../Componentes/Persona/edit/edit.component';

import { ListComponent  as ListSucursalComponent} from '../../Componentes/Sucursal/list/list.component';
import { AddComponent as AddSucursalComponent} from '../../Componentes/Sucursal/add/add.component';
import { EditComponent as EditSucursalComponent} from '../../Componentes/Sucursal/edit/edit.component';



@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrl: './home-administrador.component.css',
  standalone: true,
  imports: [
    SharedModule,
    ListPersonaComponent,
    AddPersonaComponent,
    EditPersonaComponent,
    ListSucursalComponent,
    AddSucursalComponent,
    EditSucursalComponent,
  ],
})

export class HomeAdministradorComponent {
  formPersonas = 'list';
  formSucursales = 'list';


  constructor(private router:Router) {
  }

  cambiar(){
    this.formPersonas = 'add'
  }
  Salir(){
    this.router.navigate(['inicio']);
  }
}
