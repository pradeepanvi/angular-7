import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddressComponent } from './user/address/address.component';
import { EditAddressComponent } from './user/address/edit-address/edit-address.component';
import { StartAddressComponent } from './user/address/start-address/start-address.component';
import { UserService } from './shared/user.service';
import { AddressService } from "./shared/address.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AddressComponent,
    EditAddressComponent,
    StartAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
