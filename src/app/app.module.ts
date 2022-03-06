import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoryComponent } from './components/story/story.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { FoodcenterComponent } from './components/foodcenter/foodcenter.component';
import { CafeComponent } from './components/cafe/cafe.component';
import { SingsaksitComponent } from './components/singsaksit/singsaksit.component';
import { TummachartComponent } from './components/tummachart/tummachart.component';
import { UmongComponent } from './components/umong/umong.component';
import { BekeryComponent } from './components/bekery/bekery.component';
import { KongpadComponent } from './components/kongpad/kongpad.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    NavbarComponent,
    StoryComponent,
    HotelComponent,
    FoodcenterComponent,
    CafeComponent,
    SingsaksitComponent,
    TummachartComponent,
    UmongComponent,
    BekeryComponent,
    KongpadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
