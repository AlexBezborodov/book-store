import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component'
import { MaterialModule } from './header/material-module';
import { MainComponent } from './main/main.component';
import { GenreComponent } from './genre/genre.component';
import { SubgenreComponent } from './subgenre/subgenre.component';
import { AddnewsubgenreComponent } from './addnewsubgenre/addnewsubgenre.component';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { BookAddedWindowComponent } from './book-added-window/book-added-window.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    GenreComponent,
    SubgenreComponent,
    AddnewsubgenreComponent,
    AddinfoComponent,
    BookAddedWindowComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
