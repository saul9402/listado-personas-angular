import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Ingreso } from '../../../presupuesto-app-inicial/src/app/ingreso.model';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient,
    private loginService: LoginService) { }

  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://listado-personas-590c5.firebaseio.com/datos.json?auth=' + token);
  }

  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://listado-personas-590c5.firebaseio.com/datos.json?auth=' + token, personas).subscribe(response => {
      console.log("Resultado de Guardar las personas " + JSON.stringify(response));
    },
      error => {
        console.log("Error al guardar personas. " + JSON.stringify(error));
      });
  }

  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-590c5.firebaseio.com/datos/' + index + ".json?auth=" + token;
    this.httpClient.put(url, persona).subscribe(response => {
      console.log("resultado de modificar el objeto persona " + JSON.stringify(response));
    },
      error => {
        console.error("Error al modificar la persona " + JSON.stringify(error));
      });
  }


  eliminarPersona(index: number) {
    let url: string;
    const token = this.loginService.getIdToken();
    url = 'https://listado-personas-590c5.firebaseio.com/datos/' + index + ".json?auth=" + token;
    this.httpClient.delete(url).subscribe(response => {
      console.log("resultado de eliminar el objeto persona " + JSON.stringify(response));
    },
      error => {
        console.error("Error al eliminar la persona " + JSON.stringify(error));
      });

  }
}
