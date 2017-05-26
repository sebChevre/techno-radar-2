"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu/menu.component");
var main_component_1 = require("./main/main.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var radar_list_component_1 = require("./radar-list/radar-list.component");
var router_1 = require("@angular/router");
var radar_detail_component_1 = require("./radar-detail/radar-detail.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var appRoutes = [
    { path: 'radar-list', component: radar_list_component_1.RadarListComponent },
    { path: 'radar-detail/:id', component: radar_detail_component_1.RadarDetailComponent },
    { path: '',
        redirectTo: '/radar-list',
        pathMatch: 'full'
    },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            ngx_bootstrap_1.BsDropdownModule.forRoot(),
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            main_component_1.MainComponent,
            menu_component_1.MenuComponent,
            radar_list_component_1.RadarListComponent,
            radar_detail_component_1.RadarDetailComponent,
            page_not_found_component_1.PageNotFoundComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map