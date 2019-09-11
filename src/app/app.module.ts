import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LogginService } from './LogginService.service';
import { PersonasService } from './personas.service';
import { PersonasComponent } from './personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PersonaComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LogginService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
