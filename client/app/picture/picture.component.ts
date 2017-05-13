/**
 * Created by crist on 11/05/2017.
 */
import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {
  @Input() titulo: string;
  @Input() url: string;
  descricao: string;
  _id: string;
}