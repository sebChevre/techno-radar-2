"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by seb on 24.05.17.
 */
var core_1 = require("@angular/core");
require("../../assets/css/styles.css");
var MenuComponent = (function () {
    function MenuComponent() {
        this.title = 'Tour of Heroes';
        this.hero = 'Windstorm';
    }
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 't2-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.css']
    })
], MenuComponent);
exports.MenuComponent = MenuComponent;
=======
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by seb on 24.05.17.
 */
var core_1 = require('@angular/core');
var MainComponent = (function () {
    function MainComponent() {
        this.title = 'Tour of Heroes';
        this.hero = 'Windstorm';
    }
    MainComponent = __decorate([
        core_1.Component({
            selector: 't2-main',
            templateUrl: 'main.component.html',
            styleUrls: ['main.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
>>>>>>> 73af6fb74434654dba4ff5b23ef6e9b0aa036955
//# sourceMappingURL=main.component.js.map