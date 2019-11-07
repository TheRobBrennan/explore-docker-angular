import { Component, OnInit, Input } from '@angular/core';
// ActivatedRoute holds information about the route to this instance of the HeroDetailComponent
import { ActivatedRoute } from '@angular/router';
// Location is an Angular service for interacting with the browser
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // route.snapshot is a static image of the route information shortly after the component was created
    // paramMap is a dictionary of route parameter values extracted from the URL
    const id = +this.route.snapshot.paramMap.get('id'); // Remember: + converts our string value into a number
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }
}
