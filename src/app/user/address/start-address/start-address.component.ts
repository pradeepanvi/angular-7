import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { UserService } from '../../../shared/user.service';
import { AddressService } from '../../../shared/address.service';

@Component({
  selector: 'app-start-address',
  templateUrl: './start-address.component.html',
  styleUrls: ['./start-address.component.scss']
})
export class StartAddressComponent implements OnInit, AfterViewInit {
  address:any = [];

  constructor(public router:Router,
              public route: ActivatedRoute,
              public http:Http, 
              public userService:UserService,
              public addressService:AddressService) { }

  ngOnInit() {
    const headers = new Headers({'Authorization':this.userService.token})
    this.http.get('http://localhost:3000/user/address/', {headers: headers}).subscribe(
        (res) => {
          this.address = res.json().address;
        }
    )    
  }
  ngAfterViewInit(){
    console.log('Helo');
  }

  addAddress(){
    this.router.navigate(['add'], { relativeTo: this.route});   
  }

  edit(id, _id){
    this.router.navigate(['edit/'+id], { relativeTo: this.route});
    this.addressService.setAddressID(_id);
    console.log(_id)
  }
  delete(id, _id){
    const headers = new Headers({'Authorization':this.userService.token})
    this.http.delete('http://localhost:3000/user/address/'+_id, {headers: headers}).subscribe(
        (res) => {
          res.json();
        }
    )
    this.http.get('http://localhost:3000/user/address/', {headers: headers}).subscribe(
      (res) => {
        this.address = res.json().address;
      }
    )    
  }
  default(id, _id){

  }

}
