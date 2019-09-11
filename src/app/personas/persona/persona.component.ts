import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  /*Con el decorador @Input estás indicando que la propiedad que tiene viene de su padre, es decir que ese valor viene desde otro componente*/
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
  }

  emitirSaludo() {
  this.personasService.saludar.emit(this.indice);
  }

}
