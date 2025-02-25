import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../../../Service/persona.service';
import { Persona } from '../../../Modelo/Persona';

@Component({
  selector: 'app-persona-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  standalone: true
})
export class AddComponent {
  constructor(private service:PersonaService){}

  ngOnInit(){
  }

  persona = new Persona();

  Guardar(persona:Persona){
    console.log("Nombres: " + persona.nombre)
    alert("Nombres: " + persona.nombre);
    
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("Se agrego la persona con Exito...!!!");
    })
    
  }
}
