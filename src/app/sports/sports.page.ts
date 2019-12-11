import { MusicService } from './../services/music.service';
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage {

  currentLocation: any;
  coordinates: any[] = [];
  defaultZoom = 14;

  constructor(private musicService: MusicService) { }

  ionViewDidEnter() {
    this.getCurrentPosition();
    this.watchPosition();
    this.musicService.searchTracks('bruises').subscribe(data => console.log(data));
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentLocation = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    };
  }

  watchPosition() {
    Geolocation.watchPosition({}, position => {
      this.currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.coordinates.push({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }



}
