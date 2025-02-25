import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Inmueble } from '../../../Modelo/Inmueble';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class ListComponent {
  inmubles: Inmueble[] = [];

  @Input() changeMode!: (message: string) => void;

  
}
