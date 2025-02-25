import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Sucursal } from '../../../Modelo/Sucursal';

@Component({
  selector: 'app-sucursal-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class ListComponent {
  sucursales: Sucursal[] = []
}
