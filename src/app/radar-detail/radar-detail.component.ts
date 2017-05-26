/**
 * Created by seb on 25.05.17.
 */
import { Component } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";


@Component({
    selector: 't2-radar-detail',
    templateUrl: 'radar-detail.component.html',
    styleUrls: ['radar-detail.component.css']
})
export class RadarDetailComponent {
    title = 'Tour of Heroes';
    hero = 'Windstorm';
    radarid:number;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    goToProductDetails() {
        this.router.navigate(['/product-details', this.radarid]);
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.radarid = +params['id']; // (+) converts string 'id' to a number

            // In a real app: dispatch action to load the details here.
        });



        // (+) converts string 'id' to a number

        //this.route.params
            //.switchMap((params: Params) => this.service.getHero(+params['id']))
            //.subscribe((hero: Hero) => this.hero = hero);
    }
}
