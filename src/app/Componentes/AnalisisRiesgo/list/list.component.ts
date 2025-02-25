import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { EstudioRiesgo } from '../../../Modelo/EstudioRiesgo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class ListComponent {
  @Input() changeMode!: (message: string) => void; 
  estudios: EstudioRiesgo[] = []
}
