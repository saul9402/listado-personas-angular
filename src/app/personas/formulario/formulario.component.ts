import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../LogginService.service';
import { PersonasService } from '../../personas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  /*
  Se borra ya que se usan los servicios y se sustituye con eso
  */
  //@Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string;
  apellidoInput: string;
  index: number;
  modoEdicon: number;

  constructor(private logginService: LogginService,
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute) {
    this.personasService.saludar.subscribe((indice: number) => {
      alert("EL indice es: " + indice);
    });
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicon = +this.route.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicon != null && this.modoEdicon === 1) {
      const persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if (this.modoEdicon != null && this.modoEdicon === 1) {
      this.personasService.modificarPersona(this.index, persona1);
    } else {
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(["personas"]);
  }

  eliminarPersona() {
    if (this.index != null) {
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }

}
