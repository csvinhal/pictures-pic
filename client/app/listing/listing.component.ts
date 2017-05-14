/**
 * Created by crist on 11/05/2017.
 */
import {Component} from '@angular/core';
import {PictureService} from '../picture/picture.service';
import {PictureComponent} from "../picture/picture.component";
import {PanelComponent} from './../panel/panel.component';

@Component({
  moduleId: module.id,
  selector: 'listing',
  templateUrl: './listing.component.html'
})
export class ListingComponent {

  pictureService: PictureService;
  pictures: PictureComponent[] = [];
  message: string = '';

  constructor(pictureService: PictureService) {
    this.pictureService = pictureService;
    pictureService.list().subscribe(
      pictures => this.pictures = pictures,
      error => console.log(error));
  }

  remove(picture, panel: PanelComponent) {
    this.pictureService.remove(picture).subscribe(
      () => {
        panel.fadeOut(() => {
          let newPictures = this.pictures.slice(0);
          let index = newPictures.indexOf(picture);
          newPictures.splice(index, 1);
          this.pictures = newPictures;
          this.message = 'Picture successful removed!'
        });
      },
      error => this.message = 'Something wrong happened!');
  }
}