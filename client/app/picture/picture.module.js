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
var picture_component_1 = require("./picture.component");
var picture_pipe_1 = require("./picture.pipe");
var picture_service_1 = require("./picture.service");
var PictureModule = (function () {
    function PictureModule() {
    }
    return PictureModule;
}());
PictureModule = __decorate([
    core_1.NgModule({
        declarations: [picture_component_1.PictureComponent, picture_pipe_1.TitleFilter],
        exports: [picture_component_1.PictureComponent, picture_pipe_1.TitleFilter],
        providers: [picture_service_1.PictureService]
    })
], PictureModule);
exports.PictureModule = PictureModule;
//# sourceMappingURL=picture.module.js.map