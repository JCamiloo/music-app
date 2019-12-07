import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(private navCtrl: NavController, private authService: AuthenticateService) { }

  logout(){
    this.authService.logout();
    this.navCtrl.navigateRoot('/login');
  }
}
