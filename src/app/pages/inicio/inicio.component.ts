import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
  
})


export class InicioComponent {
  constructor(private router: Router) { }

  seleccionarUsuario(tipoUsuario: string) {
    switch (tipoUsuario) {
      case 'admin':
        this.router.navigate(['/admin/home']);
        break;
      case 'cliente':
        this.router.navigate(['/cliente']);
        break;
      case 'empleado':
        this.router.navigate(['/empleado']);
        break;
      default:
        this.router.navigate(['/inicio']);
        
    }
  }
}
