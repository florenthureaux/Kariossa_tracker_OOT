"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GoldenSkulltulaComponent = void 0;
var core_1 = require("@angular/core");
var skull_list_1 = require("../skull_list");
var GoldenSkulltulaComponent = /** @class */ (function () {
    function GoldenSkulltulaComponent() {
        this.Skull_Total = skull_list_1.Skull_Total;
    }
    GoldenSkulltulaComponent.prototype.ngOnInit = function () {
    };
    GoldenSkulltulaComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-golden-skulltula',
            templateUrl: './golden-skulltula.component.html',
            styleUrls: ['./golden-skulltula.component.css']
        })
    ], GoldenSkulltulaComponent);
    return GoldenSkulltulaComponent;
}());
exports.GoldenSkulltulaComponent = GoldenSkulltulaComponent;
