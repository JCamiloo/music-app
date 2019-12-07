import { MusicService } from './../services/music.service';
import { Component } from '@angular/core';

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

  constructor(private musicService: MusicService) {}

  ionViewDidEnter() {
    this.musicService.getNewReleases().subscribe(releases => {
      this.artists = releases;
      this.songs = releases.filter(e => e.album_type === 'single');
      this.albums = releases.filter(e => e.album_type === 'album');
    });
  }

}
