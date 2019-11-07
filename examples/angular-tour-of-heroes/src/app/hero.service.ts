import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  // When you provide the service at the root level, Angular creates a single,
  // shared instance of HeroService and injects into any class that asks for it.
  //
  // Registering the provider in the @Injectable metadata also allows Angular
  // to optimize an app by removing the service if it turns out not to be used after all.
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  // TODO: Change from a synchronous service to an asynchronous real-world example
  getHeroes(): Hero[] {
    return HEROES;
  }
}
