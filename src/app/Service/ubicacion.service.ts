import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UbicacionGeo} from '../Modelo/UbicacionGeo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionGeograficaService {

  private Url = 'http://localhost:8080/ubicacionesgeograficas';

  constructor(private http: HttpClient) { }

  getUbicacionesGeograficas(): Observable<UbicacionGeo[]> {
    return this.http.get<UbicacionGeo[]>(this.Url);
  }
  getUbicacionGeograficaById(id: number) {
    return this.http.get<UbicacionGeo>(`${this.Url}/${id}`);
  }
}