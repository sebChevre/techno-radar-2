"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by seb on 24.05.17.
 */
var core_1 = require("@angular/core");
var MainComponent = (function () {
    function MainComponent() {
        this.title = 'Tour of Heroes';
        this.hero = 'Windstorm';
    }
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: 't2-main',
        templateUrl: 'main.component.html',
        styleUrls: ['main.component.css']
    })
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map