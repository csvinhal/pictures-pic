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

  save(picture: PictureComponent): Observable<Response> {
    return this.http.post(this.url, JSON.stringify(picture), {headers: this.headers});
  }

  list(): Observable<PictureComponent[]> {
    return this.http.get(this.url).map(res => res.json());
  }
}