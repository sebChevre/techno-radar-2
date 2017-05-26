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
/**
 * Created by seb on 25.05.17.
 */
var core_1 = require('@angular/core');
var radar_service_1 = require('../services/radar.service');
var RadarListComponent = (function () {
    function RadarListComponent(service) {
        this.service = service;
        this.title = 'Liste des radars';
        this.radars = [];
        this.getRadars();
    }
    RadarListComponent.prototype.ngOnInit = function () {
        //radars:Radar[];
        //this.getRadars();
    };
    RadarListComponent.prototype.getRadars = function () {
        //this.radars = this.service.getRadars();
        var that = this;
        this.service.getRadarsObervable().subscribe(function (radar) {
            console.log('Next: %s', radar);
            that.radars.push(radar);
        }, function (err) {
            console.log('Error: %s', err);
        }, function () {
            console.log('Completed');
        });
    };
    RadarListComponent = __decorate([
        core_1.Component({
            selector: 't2-radar-list',
            templateUrl: './radar-list.component.html',
            styleUrls: ['./radar-list.component.css'],
            providers: [radar_service_1.RadarService]
        }), 
        __metadata('design:paramtypes', [radar_service_1.RadarService])
    ], RadarListComponent);
    return RadarListComponent;
}());
exports.RadarListComponent = RadarListComponent;
//# sourceMappingURL=radar-list.component.js.map