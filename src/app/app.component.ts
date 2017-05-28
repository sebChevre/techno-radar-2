import { Component } from '@angular/core';
import '../assets/css/styles.css';



@Component({
    selector: 'techno2-app',
    templateUrl: './app.component.html',
    //styleUrls: ['./app.style.less'],

    styles: [
        require('./app.style.less').toString()
    ],
})
export class AppComponent {
    title = 'Tour of Heroes';
    hero = 'Windstorm';
}