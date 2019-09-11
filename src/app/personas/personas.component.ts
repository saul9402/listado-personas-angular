import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  
  personas: Persona[] = [];

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  constructor(private loggingService: LogginService, private personasService: PersonasService) { }

}
