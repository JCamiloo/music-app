import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    return this.http.get(`${environment.API_URL}new-releases`).pipe(map((resp: any) => resp.albums.items));
  }
}
