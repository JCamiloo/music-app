import { MusicService } from './../services/music.service';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SongModalComponent } from './components/song-modal/song-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  artists = [];
  songs = [];
  albums = [];

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400
  };

  constructor(private musicService: MusicService, private modalController: ModalController) {}

  ionViewDidEnter() {
    this.artists = this.musicService.getArtist();
    this.musicService.getNewReleases().subscribe(releases => {
      this.songs = releases.filter(e => e.album_type === 'single');
      this.albums = releases.filter(e => e.album_type === 'album');
    });
  }

  async showSongs(artist: any) {
    const songs: any = await this.musicService.getArtistTopTracks(artist.id);
    const modal = await this.modalController.create({
      component: SongModalComponent,
      componentProps: {
        songs: songs.tracks,
        artist: artist.name
      }
    })

    modal.present();
  }
}
