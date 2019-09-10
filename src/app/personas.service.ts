import { Persona } from './persona.model';
import { LogginService } from './LogginService.service';
import { Injectable } from '@angular/core';

/*
Se agrega este decorador cuando se necesita inyectar un servicio dentro de otro servicio
*/
@Injectable()
export class PersonasService {

    constructor(private logginService: LogginService) { }

    personas: Persona[] = [
        new Persona("Juan", "Perez"),
        new Persona("Laura", "Juarez")];


    agregarPersona(persona: Persona) {
        this.logginService.enviaMensajeAConsola("Se agregó la siguiente persona: " + JSON.stringify(persona));
        this.personas.push(persona);
    }
}