import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LogginService } from './LogginService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titulo = 'Listado de Personas';
  personas: Persona[] = [];

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  constructor(private loggingService: LogginService, private personasService: PersonasService) { }
}
