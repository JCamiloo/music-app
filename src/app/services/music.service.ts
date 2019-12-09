import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import * as dataArtists from "./artists.json";
@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  getArtist() {
    return dataArtists.items;
  }

  getNewReleases() {
    return this.http.get(`${environment.API_URL}browse/new-releases`).pipe(map((resp: any) => resp.albums.items));
  }

  getArtistTopTracks(artistId) {
    return this.http.get(`${environment.API_URL}artists/${artistId}/top-tracks?country=CO`);
  }

  getAlbumTracks(albumId) {
    return this.http.get(`${environment.API_URL}albums/${albumId}/tracks?country=CO`);
  }
}
