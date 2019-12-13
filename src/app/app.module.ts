import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule,} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { RequestComponent } from './request/request.component';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { AutoLogoutService } from './autologout.service';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';




@NgModule({
  declarations: [
    AppComponent, 
   SignupComponent,  LoginComponent, HomeComponent
   
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgIdleKeepaliveModule.forRoot()
  
  ],
  providers: [CookieService,AutoLogoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
