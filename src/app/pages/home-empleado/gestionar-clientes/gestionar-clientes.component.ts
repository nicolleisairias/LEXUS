import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ListComponent } from '../../../Componentes/Clientes/list/list.component';

@Component({
  selector: 'app-gestionar-clientes',
  templateUrl: './gestionar-clientes.component.html',
  styleUrl: './gestionar-clientes.component.css',
  standalone: true,
  imports: [ SharedModule, ListComponent ]
})
export class GestionarClientesComponent {
  mode: string = 'list';

  changeMode(type: string): void {
    this.mode = type;
  }

}
