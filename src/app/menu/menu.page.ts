import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(private navCtrl: NavController, 
              private authService: AuthenticateService,
              private menuController: MenuController) { }

  goTo(page: string) {
    switch(page){
      case 'home':
        this.navCtrl.navigateRoot('menu/home');
        this.menuController.close();
        break;
      case 'sports':
        this.navCtrl.navigateRoot('menu/sports');
        this.menuController.close();
        break;
      case 'settings':
        this.navCtrl.navigateRoot('menu/settings');
        this.menuController.close();
        break;
    }
  }

  logout(){
    this.authService.logout();
    this.navCtrl.navigateRoot('/login');
  }
}
