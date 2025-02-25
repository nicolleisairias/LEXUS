import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sucursal } from '../../../Modelo/Sucursal';
import { SucursalService } from '../../../Service/sucursal.service';
import { SharedModule } from '../../../shared/shared.module';
import { UbicacionGeo } from '../../../Modelo/UbicacionGeo';
import { UbicacionGeograficaService } from '../../../Service/ubicacion.service';

@Component({
  selector: 'app-sucursal-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class AddComponent {
  sucursal: Sucursal = new Sucursal();
  ubicaciones: UbicacionGeo[] = [];

  constructor(
    private sucursalService: SucursalService,
    private ubicacionGeograficaService: UbicacionGeograficaService
  ) { }

  ngOnInit() {
    this.ubicacionGeograficaService.getUbicacionesGeograficas()
      .subscribe(data => {
        this.ubicaciones = data;
      });
    console.log(this.ubicaciones);
  }

  onSubmit() {
    this.sucursalService.createSucursal(this.sucursal).subscribe(data => {
      alert("Sucursal agregada con éxito.");
      
    });
  }
}
