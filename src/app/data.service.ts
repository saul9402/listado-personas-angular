import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  cargarPersonas() {
    return this.httpClient.get('https://listado-personas-590c5.firebaseio.com/datos.json');
  }

  guardarPersonas(personas: Persona[]) {
    this.httpClient.put('https://listado-personas-590c5.firebaseio.com/datos.json', personas).subscribe(response => {
      console.log("Resultado de Guardar las personas " + JSON.stringify(response));
    },
      error => {
        console.log("Error al guardar personas. " + JSON.stringify(error));
      });
  }
}
