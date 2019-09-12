import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  login(form: NgForm) {
    /**
     * Las propiedades se asocian en automatico con el atributo name 
     * de la etiqueta html y declarando solo ngModel en la misma.
     */
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email, password);

  }

}
