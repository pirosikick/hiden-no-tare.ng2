import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { HeroService } from "./hero.service";

import { AppComponent }   from './app.component';
import { HeroesComponent }   from './heroes.component';
import { HeroDetailComponent }   from './hero-detail.component';
import { DashboardComponent }   from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  providers: [HeroService],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
