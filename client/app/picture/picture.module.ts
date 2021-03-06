/**
 * Created by crist on 11/05/2017.
 */
import {NgModule} from '@angular/core';
import {PictureComponent} from './picture.component';
import {TitleFilter} from './picture.pipe';
import {PictureService} from './picture.service';

@NgModule({
  declarations: [PictureComponent, TitleFilter],
  exports: [PictureComponent, TitleFilter],
  providers: [PictureService]
})
export class PictureModule {

}