import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddressComponent } from './user/address/address.component';
import { EditAddressComponent } from './user/address/edit-address/edit-address.component';
import { StartAddressComponent } from './user/address/start-address/start-address.component';

const routes: Routes = [
  {path:'user/login', component: LoginComponent},
  {path:'user/register', component: RegisterComponent},
  {path:'user/address', component: AddressComponent, children: [
    {path:'', component: StartAddressComponent},
    {path:'add', component: EditAddressComponent},
    {path:'edit/:id', component: EditAddressComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
