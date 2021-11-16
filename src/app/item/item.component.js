"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ItemComponent = void 0;
var core_1 = require("@angular/core");
var item_list_1 = require("../item_list");
var item_list_2 = require("../item_list");
var item_list_3 = require("../item_list");
var item_list_4 = require("../item_list");
var item_list_5 = require("../item_list");
var item_list_6 = require("../item_list");
var item_list_7 = require("../item_list");
var item_list_8 = require("../item_list");
var item_list_9 = require("../item_list");
var item_list_10 = require("../item_list");
var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
        this.items1 = item_list_1.ITEMS1;
        this.items2 = item_list_2.ITEMS2;
        this.items3 = item_list_3.ITEMS3;
        this.items4 = item_list_4.ITEMS4;
        this.items5 = item_list_5.ITEMS5;
        this.song1 = item_list_6.SONG1;
        this.song2 = item_list_7.SONG2;
        this.rewards1 = item_list_9.REWARDS1;
        this.rewards2 = item_list_10.REWARDS2;
        this.key_dungeon = item_list_8.KEY_DUNGEON;
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-item',
            templateUrl: './item.component.html',
            styleUrls: ['./item.component.css']
        })
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
