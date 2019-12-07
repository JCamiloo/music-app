import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {

  constructor(private storage: Storage, private router: Router) { }

  async canActivate() {
    const isIntroShowed = await this.storage.get('isIntroShowed');
    
    if (isIntroShowed) {
      return true;
    } else {
      this.router.navigateByUrl('/intro');
    }
  }
}
