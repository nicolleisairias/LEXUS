import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ListComponent } from '../../../Componentes/AnalisisRiesgo/list/list.component';

@Component({
  selector: 'app-analisis-riesgo',
  templateUrl: './analisis-riesgo.component.html',
  styleUrl: './analisis-riesgo.component.css',
  standalone: true,
  imports: [SharedModule, ListComponent]
})
export class AnalisisRiesgoComponent {
  mode: string = 'list';

  changeMode(type: string): void{
    this.mode = type;
  }
  

}
