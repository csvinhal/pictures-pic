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
 * Created by crist on 11/05/2017.
 */
var core_1 = require("@angular/core");
var picture_service_1 = require("../picture/picture.service");
var ListingComponent = (function () {
    function ListingComponent(pictureService) {
        var _this = this;
        this.pictures = [];
        this.message = '';
        this.pictureService = pictureService;
        pictureService.list().subscribe(function (pictures) { return _this.pictures = pictures; }, function (error) { return console.log(error); });
    }
    ListingComponent.prototype.remove = function (picture, panel) {
        var _this = this;
        this.pictureService.remove(picture).subscribe(function () {
            panel.fadeOut(function () {
                var newPictures = _this.pictures.slice(0);
                var index = newPictures.indexOf(picture);
                newPictures.splice(index, 1);
                _this.pictures = newPictures;
                _this.message = 'Picture successful removed!';
            });
        }, function (error) { return _this.message = 'Something wrong happened!'; });
    };
    return ListingComponent;
}());
ListingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'listing',
        templateUrl: './listing.component.html'
    }),
    __metadata("design:paramtypes", [picture_service_1.PictureService])
], ListingComponent);
exports.ListingComponent = ListingComponent;
//# sourceMappingURL=listing.component.js.map