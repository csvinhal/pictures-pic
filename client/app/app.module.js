"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by crist on 11/05/2017.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var register_component_1 = require("./register/register.component");
var listing_component_1 = require("./listing/listing.component");
var picture_module_1 = require("./picture/picture.module");
var panel_module_1 = require("./panel/panel.module");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/map");
var button_module_1 = require("./button/button.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, picture_module_1.PictureModule, http_1.HttpModule, panel_module_1.PanelModule, app_routes_1.routing, forms_1.FormsModule, forms_1.ReactiveFormsModule, button_module_1.ButtonModule],
        declarations: [app_component_1.AppComponent, register_component_1.RegisterComponent, listing_component_1.ListingComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map