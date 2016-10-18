import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroService } from "./hero.service";

import { AppComponent }   from './app.component';
import { HeroesComponent }   from './heroes.component';
import { HeroDetailComponent }   from './hero-detail.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent }   from './hero-search.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  providers: [HeroService],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
