import { Persona } from './persona.model';
import { LogginService } from './LogginService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from './data.service';

/*
Se agrega este decorador cuando se necesita inyectar un servicio dentro de otro servicio
*/
@Injectable()
export class PersonasService {

    saludar = new EventEmitter<number>();

    constructor(private logginService: LogginService, private dataService: DataService) { }

    personas: Persona[] = [];

    setPersonas(personas: Persona[]) {
        this.personas = personas;
    }

    obtenerPersonas() {
        return this.dataService.cargarPersonas();
    }

    agregarPersona(persona: Persona) {
        this.logginService.enviaMensajeAConsola("Se agregó la siguiente persona: " + JSON.stringify(persona));
        if (this.personas == null) {
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);
    }

    encontrarPersona(index: number) {
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index: number, persona: Persona) {
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataService.modificarPersona(index, persona1);
    }
    eliminarPersona(index: number) {
        this.personas.splice(index, 1);
        this.dataService.eliminarPersona(index);
        /**
         * Se vuelve a guardar el arreglo para volver a generar los indices 
         * y no dejar espacios vacios provocando un error.
         */
        this.modificarPersonas();
    }
    modificarPersonas() {
        if (this.personas != null) {
            this.dataService.guardarPersonas(this.personas);
        }
    }
}