import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddressComponent } from './user/address/address.component';
import { EditAddressComponent } from './user/address/edit-address/edit-address.component';
import { StartAddressComponent } from './user/address/start-address/start-address.component';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { QuatationComponent } from './quatation/quatation.component';
import { StartProductComponent } from './product/start-product/start-product.component';
import { OrderComponent } from './order/order.component';
import { CDetailComponent } from './c-detail/c-detail.component';

const routes: Routes = [
  {path:'user/login', component: LoginComponent},
  {path:'user/register', component: RegisterComponent},
  {path:'user/address', component: AddressComponent, children: [
    {path:'', component: StartAddressComponent},
    {path:'add', component: EditAddressComponent},
    {path:'edit/:id', component: EditAddressComponent}
  ]},
  {path:'product', component: ProductComponent, children: [
    {path:'', component:StartProductComponent},
    {path:'add', component: EditProductComponent},
    {path:'edit/:id', component: EditProductComponent}
  ]},
  {path:'order', component:OrderComponent},
  {path:'quatation', component: QuatationComponent},
  {path:'confirm-detail', component: CDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
