/**
 * Created by crist on 11/05/2017.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PictureModule } from "./picture/picture.module";
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({
    imports: [BrowserModule, PictureModule, HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }