import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginForm: FormGroup;

  validation_messages = {
    email: [
      { type: 'required', message: 'El email es requerido' },
      { type: 'email', message: 'El email no es válido' }
    ],
    password: [
      { type: 'required', message: 'La contraseña es requerida' },
      { type: 'minlength', message: 'La contraseña debe tener 6 caracteres' }
    ]
  };

  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, 
              private authService: AuthenticateService,
              private navCtrl: NavController,
              private storage: Storage) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  loginUser() {
    this.authService.loginUser(this.loginForm.getRawValue()).then(res => {
      this.errorMessage = "";
      this.storage.set('isUserLoggedIn', true);
      this.navCtrl.navigateForward('/menu/home');
    }).catch(err => this.errorMessage = err);
  }

  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  get emailField() {
    return this.loginForm.get('email');
  }

  get passwordField() {
    return this.loginForm.get('password');
  }
}
