/**
 * Created by crist on 11/05/2017.
 */
import {Component} from '@angular/core';
import {PictureService} from '../picture/picture.service';
import {PictureComponent} from "../picture/picture.component";

@Component({
  moduleId: module.id,
  selector: 'listing',
  templateUrl: './listing.component.html'
})
export class ListingComponent {

  pictures: PictureComponent[] = [];

  constructor(pictureService: PictureService) {
    pictureService.list().subscribe(
      pictures => this.pictures = pictures,
      error => console.log(error));
  }

  remove() {

  }
}