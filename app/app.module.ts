import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Lap02Component } from './lap02/lap02.component';
import { Lap03Component } from './lap03/lap03.component';
import { Lap05Component } from './lap05/lap05.component';
import { Lap04Component } from './lap04/lap04.component';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { Lab01Component } from './lab01/lab01.component';
import { Lab6Component } from './lab6/lab6.component';
import { Lab7Component } from './lab7/lab7.component';
import { Lab8Component } from './lab8/lab8.component';
import { Lab9Component } from './lab9/lab9.component';
import { Lab10Component } from './lab10/lab10.component';
import { Lab11Component } from './lab11/lab11.component';
import { Lab12Component } from './lab12/lab12.component';
import { Lab13Component } from './lab13/lab13.component';
import { Lab03Component } from './lab03/lab03.component';
import { IndexComponent } from './index/index.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Lap02Component,
    Lap03Component,
    Lap05Component,
    Lap04Component,
    Lab01Component,
    Lab6Component,
    Lab7Component,
    Lab8Component,
    Lab9Component,
    Lab10Component,
    Lab11Component,
    Lab12Component,
    Lab13Component,
    Lab03Component,
    IndexComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path: '', component: IndexComponent },
      {path: 'lab03', component: Lab03Component },
      {path: 'lap04', component: Lap05Component },
      {path: 'students/:ID', component: Lap04Component },
      {path: 'product', component: ProductComponent },
      {path: 'gioithieu', component: Lab7Component },
      {path: 'lienhe', component: Lab8Component },
      {path: 'gopy', component: Lab9Component },
      {path: 'hoidap', component: Lab10Component },
      {path: 'dangnhap', component: Lab11Component },
      {path: 'dangky', component: Lab12Component },
      {path: 'quenmk', component: Lab13Component }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
