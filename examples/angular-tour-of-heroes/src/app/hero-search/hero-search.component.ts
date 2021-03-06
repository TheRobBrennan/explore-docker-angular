import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  // Remember that the component class does not subscribe to the heroes$ observable.
  // That's the job of the AsyncPipe in the template.
  heroes$: Observable<Hero[]>;

  // A Subject is both a source of observable values and an Observable itself.
  // You can subscribe to a Subject as you would any Observable.
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    /**
     * Every time the user types in the textbox, the binding in our HTML template calls search() with
     * the textbox value, a "search term".
     *
     * The searchTerms becomes an Observable emitting a steady stream of search terms.
     */
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // It cancels and discards previous search observables, returning only the latest search service observable.
      switchMap((term: string) => this.heroService.searchHeroes(term)),
      /**
       * With the switchMap operator, every qualifying key event can trigger an HttpClient.get() method call.
       * Even with a 300ms pause between requests, you could have multiple HTTP requests in flight and
       * they may not return in the order sent.
       *
       * switchMap() preserves the original request order while returning only the observable from the
       * most recent HTTP method call. Results from prior calls are canceled and discarded.
       *
       * Note that canceling a previous searchHeroes() Observable doesn't actually abort a
       * pending HTTP request. Unwanted results are simply discarded before they reach your application code.
       */
    );
  }
}
