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

@NgModule({
  imports: [BrowserModule, PictureModule, HttpModule, PanelModule, routing, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, RegisterComponent, ListingComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}