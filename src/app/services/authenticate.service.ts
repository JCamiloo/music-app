import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credentials) {
    return new Promise((resolve, reject) => {
      if (credentials.email === "test@test.com" && credentials.password === "123456") {
        resolve("Login correcto");
      } else {
        reject("Login incorrecto");
      }
    });
  }
}
