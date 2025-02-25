import { Component } from '@angular/core';
import { Persona } from '../../../Modelo/Persona';
import { ServiceService } from '../../../Service/service.service';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PersonaService } from '../../../Service/persona.service';

@Component({
  selector: 'app-persona-list',

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: true,
  imports: [SharedModule, CommonModule]
})
export class ListComponent {
  personas:Persona[] = [];
  constructor(private service:PersonaService, private router:Router){
    this.personas = [];
  }
  
  ngOnInit(): void {
      this.service.getPersonas()
      .subscribe(data=>{
        this.personas=data;
      })
  }

  Editar(persona:Persona): void{
    alert("Llegamos a Editar persona...!!!" + persona.nombre);
    localStorage.setItem("id", persona.id_personas.toString());
    //this.router.navigate(["edit"]);
  }

  Delete(persona:Persona): void{
    this.service.deletePersona(persona)
    .subscribe(data=>{

      // let nuevaLista: Persona[] = [];

      // for (let i = 0; i < this.personas.length; i++) {
      //   if (this.personas[i] !== persona) {
      //     nuevaLista.push(this.personas[i]);
      //   }
      // }
      
      this.personas= this.personas.filter(p => p !== persona);
      alert("Eliminamos al usuario " + persona.nombre);
    });
  }
}
