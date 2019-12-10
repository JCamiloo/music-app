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

  song: {
    preview_url: string,
    playing: boolean,
    name: string
  } = {
    preview_url: '',
    playing: false,
    name: ''
  };

  currentSong:HTMLAudioElement;
  newTime;

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

  showSongs(artist: any) {
    this.musicService.getArtistTopTracks(artist.id).subscribe((songs: any) => {
      this.openDetailModal(artist.name + ' - Top Tracks', songs.tracks);
    });
  }

  showAlbumSongs(album: any) {
    this.musicService.getAlbumTracks(album.id).subscribe((albumResp: any) => {
      this.openDetailModal(album.name, albumResp.items);
    });
  }

  async openDetailModal(title: string, songs: any[]){
    const modal = await this.modalController.create({
        component: SongModalComponent,
        componentProps: { title, songs }
    });

    modal.onDidDismiss().then(song => {
      if (song.data) {
        this.song = song.data
        this.playSong();
      } else {
        this.song = {
          preview_url: '',
          playing: false,
          name: ''
        };
      }
    });
    return await modal.present();
  }

  playSong() {
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();
    this.currentSong.addEventListener('timeupdate', () => {
      this.newTime = ( 1 / this.currentSong.duration ) * this.currentSong.currentTime;
    });
    this.song.playing = true;
  }

  pauseSong() {
    this.currentSong.pause();
    this.song.playing = false;
  }
}