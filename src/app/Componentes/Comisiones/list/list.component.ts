import { Component, Input } from '@angular/core';
import { Comision } from '../../../Modelo/Comision';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() changeMode!: (message: string) => void;
  comisiones: Comision[] = [];
  
}
