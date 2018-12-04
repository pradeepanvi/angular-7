import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FileSelectDirective } from "ng2-file-upload";

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
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { QuatationComponent } from './quatation/quatation.component';
import { CDetailComponent } from './c-detail/c-detail.component';
import { OrderComponent } from './order/order.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { ProductService } from './shared/product.service';
import { StartProductComponent } from './product/start-product/start-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AddressComponent,
    EditAddressComponent,
    StartAddressComponent,
    ProductComponent,
    EditProductComponent,
    QuatationComponent,
    CDetailComponent,
    OrderComponent,
    DetailProductComponent,
    StartProductComponent,
    FileSelectDirective,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AddressService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
