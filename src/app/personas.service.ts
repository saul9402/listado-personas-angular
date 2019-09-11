import { Persona } from './persona.model';
import { LogginService } from './LogginService.service';
import { Injectable, EventEmitter } from '@angular/core';

/*
Se agrega este decorador cuando se necesita inyectar un servicio dentro de otro servicio
*/
@Injectable()
export class PersonasService {

    saludar = new EventEmitter<number>();

    constructor(private logginService: LogginService) { }

    personas: Persona[] = [
        new Persona("Juan", "Perez"),
        new Persona("Laura", "Juarez")];


    agregarPersona(persona: Persona) {
        this.logginService.enviaMensajeAConsola("Se agregó la siguiente persona: " + JSON.stringify(persona));
        this.personas.push(persona);
    }

    encontrarPersona(index: number) {
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index: number, persona: Persona) {
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
    }
}