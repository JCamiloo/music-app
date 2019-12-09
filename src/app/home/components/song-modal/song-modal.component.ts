import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-song-modal',
  templateUrl: './song-modal.component.html',
  styleUrls: ['./song-modal.component.scss'],
})
export class SongModalComponent {

  songs: any[] = [];
  artist: any[] = [];

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ionViewDidEnter() {
    this.songs = this.navParams.data.songs;
    this.artist = this.navParams.data.artist;
  }

  async selectSong(song) {
    await this.modalController.dismiss(song);
  }
}