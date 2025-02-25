import { Component, Input } from '@angular/core';
import { Persona } from '../../../Modelo/Persona';
import { PersonaService } from '../../../Service/persona.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class EditComponent {
  @Input() changeMode!: (message: string) => void;

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
    } )
    this.changeMode('list');
  }
}
