/**
 * Created by crist on 13/05/2017.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {PictureComponent} from "./picture.component";

@Pipe({
  name: 'titleFilter'
})
export class TitleFilter implements PipeTransform {

  transform(pictures: PictureComponent[], text: string) {
    return pictures.filter(picture => picture.titulo.toLowerCase().includes(text.toLowerCase()));
  }
}