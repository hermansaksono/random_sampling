import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleRandomComponent } from './simple-random/simple-random.component';
import { StratifiedRandomComponent } from './stratified-random/stratified-random.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleRandomComponent,
    StratifiedRandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
