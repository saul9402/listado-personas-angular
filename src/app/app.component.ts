import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyD8jC_r8z0TfNE4V-4hYDUjSpQRCSXhp4s",
      authDomain: "listado-personas-590c5.firebaseapp.com"
    });
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }
}
