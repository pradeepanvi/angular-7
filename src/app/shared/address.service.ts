import { UserService } from "./user.service";
import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Address } from "./address.model";
import { Subject } from "rxjs";

@Injectable()
export class AddressService {
    addressesChanged = new Subject<Address[]>();
    adderss_id:string = '';
    addressD:Object = {};

    private addresses: Address[] = [
        new Address(
            '',
            0,
            '',
            '',
            '',
            '',
            '',
            0,
            '',
        )
    ]

    constructor(public http:Http, 
                public userService:UserService){}

    getAllAddress(){
        const headers = new Headers({'Authorization':this.userService.token})
        this.http.get('http://localhost:3000/user/address/', {headers: headers}).subscribe(
            (res) => {
              this.addresses = res.json().address;
            //   return this.addresses.slice();
            //   console.log(this.addresses);
            }
        )
    }
    addAddress(addresses: Address[]){
        const headers = new Headers({'Authorization':this.userService.token})
        this.http.post('http://localhost:3000/user/address/', addresses, {headers: headers}).subscribe(
            (res) => {
              this.addresses = res.json();
            }
        )        
    }
    updateAddress(newAddress){
        console.log(this.adderss_id);
        const headers = new Headers({'Authorization':this.userService.token})
        this.http.patch('http://localhost:3000/user/address/'+this.adderss_id, newAddress, {headers: headers}).subscribe(
            (res) => {
              this.addresses = res.json();
              console.log(this.addresses);
              //this.addressesChanged.next(this.addresses.slice());
            }
        )        
    }
    deleteAddress(id, _id){
        const headers = new Headers({'Authorization':this.userService.token})
        this.http.delete('http://localhost:3000/user/address/'+_id, {headers: headers}).subscribe(
            (res) => {
              this.addresses = res.json();
            }
        )
    }
    setAddressID(id){
        this.adderss_id = id;
    }
}