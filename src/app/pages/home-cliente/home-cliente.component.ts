import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.css',
  standalone: true,
  imports: [SharedModule, RouterModule]
})

export class HomeClienteComponent { 
  constructor(private router:Router) {
    this.router.navigate(['cliente/buscar-inmuebles']);
  }

  Salir(){
    this.router.navigate(['inicio']);
  }

}
