import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserFormComponent } from './Component/user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './Component/about/about.component';
import { PipedemoComponent } from './Component/pipedemo/pipedemo.component';
import { EllipsisPipe } from './ellipsis.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserFormComponent,
    AboutComponent,
    PipedemoComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
