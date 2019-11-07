/**
 * $ ng generate module app-routing --flat --module=app
 *
 * --flat puts the file in src/app instead of its own folder.
 * --module=app tells the CLI to register it in the imports array of the AppModule.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
];

// Initializes the router and starts it listening for browser location changes
@NgModule({
  /**
   * The method is called forRoot() because you configure the router at the application's
   * root level. The forRoot() method supplies the service providers and directives needed
   * for routing, and performs the initial navigation based on the current browser URL.
   */
  imports: [RouterModule.forRoot(routes)],
  // Export RouterModule so it will be available throughout the app
  exports: [RouterModule],
})
export class AppRoutingModule {}
