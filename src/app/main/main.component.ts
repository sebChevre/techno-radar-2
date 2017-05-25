/**
 * Created by seb on 24.05.17.
 */
import { Component } from '@angular/core';
import '../../assets/css/styles.css';

@Component({
    selector: 't2-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    title = 'Tour of Heroes';
    hero = 'Windstorm';
}
