<<<<<<< HEAD
/**
 * Created by seb on 25.05.17.
 */
=======
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
var mock_radars_1 = require('../data/mock-radars');
var Rx_1 = require('rxjs/Rx');
var RadarService = (function () {
    function RadarService() {
    }
    RadarService.prototype.getRadars = function () {
        return mock_radars_1.RADARS;
    }; // stub
    RadarService.prototype.getRadarsObervable = function () {
        return Rx_1.Observable.from(mock_radars_1.RADARS);
    };
    RadarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RadarService);
    return RadarService;
}());
exports.RadarService = RadarService;
>>>>>>> 73af6fb74434654dba4ff5b23ef6e9b0aa036955
//# sourceMappingURL=radar.service.js.map