/**
 * Created by crist on 11/05/2017.
 */
import {Component} from '@angular/core';
import {PictureComponent} from '../picture/picture.component';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PictureService} from "../picture/picture.service";

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  picture: PictureComponent = new PictureComponent();
  myForm: FormGroup;
  pictureService: PictureService;

  constructor(pictureService: PictureService, fb: FormBuilder) {
    this.pictureService = pictureService;
    this.myForm = fb.group({
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      url: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  save(event) {
    event.preventDefault();

    this.pictureService.save(this.picture).subscribe(() => {
          this.picture = new PictureComponent();
          console.log('Picture successful saved');
        },
        error => console.log(error));
  }
}