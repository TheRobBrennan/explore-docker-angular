import { Injectable } from '@angular/core';
// In this tutorial, you'll simulate getting data from the server with the RxJS of() function
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  // When you provide the service at the root level, Angular creates a single,
  // shared instance of HeroService and injects into any class that asks for it.
  //
  // Registering the provider in the @Injectable metadata also allows Angular
  // to optimize an app by removing the service if it turns out not to be used after all.
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
