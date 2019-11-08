import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  // The components, directives, and pipes that belong to this NgModule
  declarations: [
    AppComponent
  ],

  // The subset of declarations that should be visible and usable in the component templates of other NgModules.
  // A root NgModule has no reason to export anything because other modules don't need to import the root NgModule
  exports: [],

  // Other modules whose exported classes are needed by component templates declared in this NgModule
  imports: [
    BrowserModule
  ],

  // Creators of services that this NgModule contributes to the global collection of services;
  // they become accessible in all parts of the app.
  providers: [],
  // When you provide the service at the root level, Angular creates a single, shared instance for the app
  // When you register a provider with a specific NgModule, the same instance of a service is available to all components in that NgModule.
  // When you register a provider at the component level, you get a new instance of the service with each new instance of that component.

  // The main application view, called the root component, which hosts all other app views.
  // Only the root NgModule should set the bootstrap property.
  bootstrap: [AppComponent]
})
export class AppModule { }
