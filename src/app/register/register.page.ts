import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  
  registerForm: FormGroup;

  validation_messages = {
    name: [{ type: 'required', message: 'El nombre es requerido'}],
    lastName: [{ type: 'required', message: 'El apellido es requerido'}],
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
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  registerUser() {
    
  }

  get nameField() {
    return this.registerForm.get('name');
  }

  get lastNameField() {
    return this.registerForm.get('lastName');
  }

  get emailField() {
    return this.registerForm.get('email');
  }

  get passwordField() {
    return this.registerForm.get('password');
  }
}
