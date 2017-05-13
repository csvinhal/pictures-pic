"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by crist on 13/05/2017.
 */
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var PictureService = (function () {
    function PictureService(http) {
        this.url = 'v1/fotos';
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    PictureService.prototype.save = function (picture) {
        if (picture._id)
            return this.http.put(this.url + "/" + picture._id, JSON.stringify(picture), { headers: this.headers })
                .map(function () { return ({ message: 'Picture updated!', include: false }); });
        else
            return this.http.post(this.url, JSON.stringify(picture), { headers: this.headers })
                .map(function () { return ({ message: 'Picture saved!', include: true }); });
    };
    PictureService.prototype.searchById = function (id) {
        return this.http.get(this.url + "/" + id).map(function (res) { return res.json(); });
    };
    PictureService.prototype.list = function () {
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    PictureService.prototype.remove = function (picture) {
        return this.http.delete(this.url + "/" + picture._id);
    };
    return PictureService;
}());
PictureService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PictureService);
exports.PictureService = PictureService;
//# sourceMappingURL=picture.service.js.map