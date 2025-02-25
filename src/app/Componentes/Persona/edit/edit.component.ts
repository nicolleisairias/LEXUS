import { Component } from '@angular/core';
import { Persona } from '../../../Modelo/Persona';
import { PersonaService } from '../../../Service/persona.service';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  standalone: true
})
export class EditComponent {
  persona :Persona=new Persona();
  constructor(private service:PersonaService){}

  ngOnInit(){ 
    this.Editar();
  }

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    alert("Actualizado con Exito...!!!" + id);
    this.service.getPersonaId(id).
      subscribe(data=>{
        this.persona=data;
      })
  }

  Actualizar(persona:Persona){
    this.service.updatePersona(this.persona).subscribe(data=>{
      this.persona=data;
      alert("Actualizado con Exito...!!!" + this.persona.nombre);

    } )
  }
}
