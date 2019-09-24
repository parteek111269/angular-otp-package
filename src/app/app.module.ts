import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularOtpLibModule } from 'angular-otp-box';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularOtpLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
