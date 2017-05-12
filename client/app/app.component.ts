/**
 * Created by crist on 11/05/2017.
 */
import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: "app",
    templateUrl: "./app.component.html"
})
export class AppComponent {

    pictures: Object[] = [];

    constructor(http: Http) {
        http.get('v1/fotos').map(res => res.json()).subscribe(
            pictures => this.pictures = pictures,
            error => console.log(error));
    }
}