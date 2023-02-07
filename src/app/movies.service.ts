import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  imagePrefix: string = "https://image.tmdb.org/t/p/w500/";
  constructor(private _httpClient: HttpClient) {

  }
  getTrending(type: string): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=0e422094dbe1201c2a0c2f6c2d996915`)
  }

  getDetails(movieId: string): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0e422094dbe1201c2a0c2f6c2d996915&language=en-US`)
  }
}
