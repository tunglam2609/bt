import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Lap02Component } from './lap02/lap02.component';
import { Lap03Component } from './lap03/lap03.component';
import { Lap05Component } from './lap05/lap05.component';
import { Lap04Component } from './lap04/lap04.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Lap02Component,
    Lap03Component,
    Lap05Component,
    Lap04Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: Lap05Component },
      {path: 'students/:ID', component: Lap04Component }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
