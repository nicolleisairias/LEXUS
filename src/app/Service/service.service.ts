import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/personas/submit';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url, persona);
  }

  getPersonaId(idpersona:number){
    return this.http.get<Persona>(this.Url+"/"+idpersona);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id_personas, persona);
  }

  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+ "/" + persona.id_personas);
  }
}
