import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { UserService } from '../../../shared/user.service';
import { AddressService } from "../../../shared/address.service";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Address } from '../../../shared/address.model';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit, AfterContentInit, AfterViewInit {
  id: number;
  addressForm: FormGroup;
  token:any;
  editMode = false;
  address:any;

  constructor(public route: ActivatedRoute,
              public router: Router,
              public http:Http, 
              public userService:UserService,
              public addressService:AddressService) { }

  ngOnInit() {
    console.log(this.route);
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
        console.log(params);
        console.log(this.editMode);
      }
    )
  }

  ngAfterContentInit(){
  }
  ngAfterViewInit(){
  }

  onSubmit(){
    if(this.editMode){
      const editModeData = [
        {"propName":"fullname", "value":this.addressForm.value.fullname},
        {"propName":"mobile", "value":this.addressForm.value.mobile},
        {"propName":"streetadd1", "value":this.addressForm.value.streetadd1},
        {"propName":"streetadd2", "value":this.addressForm.value.streetadd2},
        {"propName":"landmark", "value":this.addressForm.value.landmark},
        {"propName":"city", "value":this.addressForm.value.city},
        {"propName":"state", "value":this.addressForm.value.state},
        {"propName":"pincode", "value":this.addressForm.value.pincode},
        {"propName":"addresstype", "value":this.addressForm.value.addresstype},
      ];
      console.log(editModeData);

      this.addressService.updateAddress(editModeData);
    } else {
      this.addressService.addAddress(this.addressForm.value);
    }
    //console.log(this.token + ', ' + this.userService.token);
    //console.log(this.addressForm.value)
  }

  private initForm(){
    if(this.editMode){
      const headers = new Headers({'Authorization':this.userService.token})
      this.http.get('http://localhost:3000/user/address/', {headers: headers}).subscribe(
            (res) => {
              this.address = res.json().address[this.id];
              console.log(this.address.fullname);
              this.addressForm = new FormGroup({
                'fullname' : new FormControl(this.address.fullname, Validators.required),
                'mobile' : new FormControl(this.address.mobile, Validators.required),
                'streetadd1' : new FormControl(this.address.streetadd1, Validators.required),
                'streetadd2' : new FormControl(this.address.streetadd2),
                'landmark' : new FormControl(this.address.landmark, Validators.required),
                'city' : new FormControl(this.address.city, Validators.required),
                'state' : new FormControl(this.address.state, Validators.required),
                'pincode' : new FormControl(this.address.pincode, Validators.required),
                'addresstype' : new FormControl(this.address.addresstype, Validators.required)
              })
            }
        )
    }
      this.addressForm = new FormGroup({
        'fullname' : new FormControl('', Validators.required),
        'mobile' : new FormControl('', Validators.required),
        'streetadd1' : new FormControl('', Validators.required),
        'streetadd2' : new FormControl(''),
        'landmark' : new FormControl('', Validators.required),
        'city' : new FormControl('', Validators.required),
        'state' : new FormControl('', Validators.required),
        'pincode' : new FormControl('', Validators.required),
        'addresstype' : new FormControl('', Validators.required)
      })
  }
}
