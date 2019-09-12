import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Ingreso } from '../../../presupuesto-app-inicial/src/app/ingreso.model';

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

  modificarPersona(index: number, persona: Persona) {
    let url: string;
    url = 'https://listado-personas-590c5.firebaseio.com/datos/' + index + ".json";
    this.httpClient.put(url, persona).subscribe(response => {
      console.log("resultado de modificar el objeto persona " + JSON.stringify(response));
    },
      error => {
        console.error("Error al modificar la persona " + JSON.stringify(error));
      });
  }


  eliminarPersona(index: number) {
    let url: string;
    url = 'https://listado-personas-590c5.firebaseio.com/datos/' + index + ".json";
    this.httpClient.delete(url).subscribe(response => {
      console.log("resultado de eliminar el objeto persona " + JSON.stringify(response));
    },
      error => {
        console.error("Error al eliminar la persona " + JSON.stringify(error));
      });

  }
}
