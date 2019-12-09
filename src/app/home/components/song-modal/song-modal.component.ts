import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-song-modal',
  templateUrl: './song-modal.component.html',
  styleUrls: ['./song-modal.component.scss'],
})
export class SongModalComponent {

  songs: any[] = [];
  title: any[] = [];

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ionViewDidEnter() {
    this.title = this.navParams.data.title;
    this.songs = this.navParams.data.songs;
  }

  async selectSong(song = null) {
    await this.modalController.dismiss(song);
  }
}