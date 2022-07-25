import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './componentes/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent
  ]
})
export class AppModule { }
