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
 * Created by seb on 25.05.17.
 */
var core_1 = require("@angular/core");
var RadarDetailComponent = (function () {
    function RadarDetailComponent() {
        this.title = 'Tour of Heroes';
        this.hero = 'Windstorm';
    }
    return RadarDetailComponent;
}());
RadarDetailComponent = __decorate([
    core_1.Component({
        selector: 't2-radar-detail',
        templateUrl: 'radar-detail.component.html',
        styleUrls: ['radar-detail.component.css']
    })
], RadarDetailComponent);
exports.RadarDetailComponent = RadarDetailComponent;
=======
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by seb on 25.05.17.
 */
var core_1 = require('@angular/core');
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
        this.title = 'Tour of Heroes';
        this.hero = 'Windstorm';
    }
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 't2-page-not-found',
            templateUrl: 'page-not-found.component.html',
            styleUrls: ['page-not-found.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;
>>>>>>> 73af6fb74434654dba4ff5b23ef6e9b0aa036955
//# sourceMappingURL=page-not-found.component.js.map