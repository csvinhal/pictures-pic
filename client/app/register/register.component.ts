/**
 * Created by crist on 11/05/2017.
 */
import {Component} from '@angular/core';
import {PictureComponent} from '../picture/picture.component';
import {Headers, Http} from '@angular/http';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'


@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  picture: PictureComponent = new PictureComponent();
  http: Http;
  myForm: FormGroup;

  constructor(http: Http, fb: FormBuilder) {
    this.http = http;
    this.myForm = fb.group({
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      url: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  save(event) {
    event.preventDefault();

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('v1/fotos/', JSON.stringify(this.picture), {headers: headers})
      .subscribe(() => {
          this.picture = new PictureComponent();
          console.log('Picture successful saved');
        },
        error => console.log(error));
  }
}