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

  save(picture: PictureComponent): Observable<RegisterMessage> {
    if (picture._id) return this.http.put(`${this.url}/${picture._id}`, JSON.stringify(picture), {headers: this.headers})
      .map(() => new RegisterMessage('Picture updated!', false));
    else return this.http.post(this.url, JSON.stringify(picture), {headers: this.headers})
      .map(() => new RegisterMessage('Picture saved!', true));
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

export class RegisterMessage {

  constructor(private _message: string, private _include: boolean) {
    this._message = _message;
    this._include = _include;
  }

  get message(): string {
    return this._message;
  }

  get include(): boolean {
    return this._include;
  }
}