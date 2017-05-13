/**
 * Created by crist on 11/05/2017.
 */
import {Component} from '@angular/core';
import {PictureComponent} from '../picture/picture.component';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PictureService} from "../picture/picture.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  picture: PictureComponent = new PictureComponent();
  myForm: FormGroup;
  pictureService: PictureService;
  route: ActivatedRoute;
  router: Router;
  message: string = '';

  constructor(pictureService: PictureService, fb: FormBuilder, route: ActivatedRoute, router: Router) {
    this.pictureService = pictureService;
    this.route = route;
    this.router = router;
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.pictureService.searchById(id)
          .subscribe(
            picture => this.picture = picture,
            error => console.log(error));
      }
    });

    this.myForm = fb.group({
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      url: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  save(event) {
    event.preventDefault();

    this.pictureService.save(this.picture).subscribe(res => {
        this.message = res.message;
        this.picture = new PictureComponent();
        if(!res.include) this.router.navigate(['']);
      },
      error => console.log(error));
  }
}