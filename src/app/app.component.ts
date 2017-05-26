import { Component } from '@angular/core';
import '../assets/css/styles.css';


@Component({
    selector: 'techno2-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
    hero = 'Windstorm';
}