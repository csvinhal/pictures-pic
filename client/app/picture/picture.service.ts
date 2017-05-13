/**
 * Created by crist on 13/05/2017.
 */
import {Http, Headers, Response} from '@angular/http';
import {PictureComponent} from "./picture.component";
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class PictureService {
  http: Http;
  headers: Headers;
  url: string = 'v1/fotos';

  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  save(picture: PictureComponent): Observable<any> {
    if (picture._id) return this.http.put(`${this.url}/${picture._id}`, JSON.stringify(picture), {headers: this.headers})
      .map(() => ({message: 'Picture updated!', include: false}));
    else return this.http.post(this.url, JSON.stringify(picture), {headers: this.headers})
      .map(() => ({message: 'Picture saved!', include: true}));
  }

  searchById(id: string): Observable<PictureComponent> {
    return this.http.get(`${this.url}/${id}`).map(res => res.json());
  }

  list(): Observable<PictureComponent[]> {
    return this.http.get(this.url).map(res => res.json());
  }

  remove(picture: PictureComponent) {
    return this.http.delete(`${this.url}/${picture._id}`);
  }
}