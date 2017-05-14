/**
 * Created by crist on 11/05/2017.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {ListingComponent} from './listing/listing.component';
import {PictureModule} from "./picture/picture.module";
import {PanelModule} from "./panel/panel.module";
import {HttpModule} from '@angular/http';
import {routing} from './app.routes';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import 'rxjs/add/operator/map';
import {ButtonModule} from "./button/button.module";
import {ModalModule} from './modal/modal.module';

@NgModule({
  imports: [BrowserModule, PictureModule, HttpModule, PanelModule, routing, FormsModule, ReactiveFormsModule, ButtonModule, ModalModule],
  declarations: [AppComponent, RegisterComponent, ListingComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}