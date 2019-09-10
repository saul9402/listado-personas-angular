import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personaCreada = new EventEmitter<Persona>();
  /*nombreInput: string;
  apellidoInput: string;*/

  @ViewChild('nombreInput', { static: false }) nombreInput: ElementRef;
  @ViewChild('apellidoInput', { static: false }) apellidoInput: ElementRef;

  constructor(private logginService: LogginService) { }

  ngOnInit() {
  }

  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.logginService.enviaMensajeAConsola("Enviamos persona " + JSON.stringify(persona1));
    this.personaCreada.emit(persona1);
  }

}
