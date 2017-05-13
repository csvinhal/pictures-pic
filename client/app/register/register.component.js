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
var picture_component_1 = require("../picture/picture.component");
var forms_1 = require("@angular/forms");
var picture_service_1 = require("../picture/picture.service");
var RegisterComponent = (function () {
    function RegisterComponent(pictureService, fb) {
        this.picture = new picture_component_1.PictureComponent();
        this.pictureService = pictureService;
        this.myForm = fb.group({
            titulo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            url: ['', forms_1.Validators.required],
            descricao: ['', forms_1.Validators.required]
        });
    }
    RegisterComponent.prototype.save = function (event) {
        var _this = this;
        event.preventDefault();
        this.pictureService.save(this.picture).subscribe(function () {
            _this.picture = new picture_component_1.PictureComponent();
            console.log('Picture successful saved');
        }, function (error) { return console.log(error); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'register',
        templateUrl: './register.component.html'
    }),
    __metadata("design:paramtypes", [picture_service_1.PictureService, forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map