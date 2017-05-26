import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MenuComponent} from "./menu/menu.component";
import {MainComponent} from "./main/main.component";
import {BsDropdownModule} from "ngx-bootstrap";
import {RadarListComponent} from "./radar-list/radar-list.component";
import { RouterModule, Routes } from '@angular/router';
import {RadarDetailComponent} from "./radar-detail/radar-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
    { path: 'radar-list', component: RadarListComponent },
    { path: 'radar-detail/:id',      component: RadarDetailComponent },
    { path: '',
        redirectTo: '/radar-list',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        MainComponent,
        MenuComponent,
        RadarListComponent,
        RadarDetailComponent,
        PageNotFoundComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

