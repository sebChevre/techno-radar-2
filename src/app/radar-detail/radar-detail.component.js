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
var RadarListComponent = (function () {
    function RadarListComponent() {
        this.title = 'Tour of Heroes';
        this.hero = 'Windstorm';
    }
    return RadarListComponent;
}());
RadarListComponent = __decorate([
    core_1.Component({
        selector: 't2-radar-list',
        templateUrl: './radar-list.component.html',
        styleUrls: ['./radar-list.component.css']
    })
], RadarListComponent);
exports.RadarListComponent = RadarListComponent;
=======
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by seb on 25.05.17.
 */
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var RadarDetailComponent = (function () {
    function RadarDetailComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'Tour of Heroes';
        this.hero = 'Windstorm';
    }
    RadarDetailComponent.prototype.goToProductDetails = function () {
        this.router.navigate(['/product-details', this.radarid]);
    };
    RadarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.radarid = +params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        // (+) converts string 'id' to a number
        //this.route.params
        //.switchMap((params: Params) => this.service.getHero(+params['id']))
        //.subscribe((hero: Hero) => this.hero = hero);
    };
    RadarDetailComponent = __decorate([
        core_1.Component({
            selector: 't2-radar-detail',
            templateUrl: 'radar-detail.component.html',
            styleUrls: ['radar-detail.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], RadarDetailComponent);
    return RadarDetailComponent;
}());
exports.RadarDetailComponent = RadarDetailComponent;
>>>>>>> 73af6fb74434654dba4ff5b23ef6e9b0aa036955
//# sourceMappingURL=radar-detail.component.js.map