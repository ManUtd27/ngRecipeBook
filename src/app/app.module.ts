import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { SubNavComponent } from './shared/sub-nav/sub-nav.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { WarningAlertComponent } from './shared/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './shared/success-alert/success-alert.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RecipeBookModule } from './recipe-book/recipe-book.module';
import { ShellComponent } from './shared/shell/shell.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptorService} from './dashboard/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubNavComponent,
    SideNavComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ShellComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RecipeBookModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
