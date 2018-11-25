import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../shared/user.service';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;
  editMode = false;
  id:number;
  products:any;

  constructor(public route:ActivatedRoute, 
              public userService:UserService,
              public productService:ProductService,
              public http:Http) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  onSubmit(){
    if(this.editMode){
      const editModeData = [
        {"propName":"name", "value":this.productForm.value.name},
        {"propName":"price", "value":this.productForm.value.price},
        {"propName":"productImage", "value":this.productForm.value.productImage},
      ];
      console.log(editModeData);

      this.productService.updateProduct(editModeData);
    } else {
      this.productService.addProduct(this.productForm.value);
    }
  }

  private initForm(){
    if(this.editMode){
      const headers = new Headers({'Authorization':this.userService.token});
      this.http.get('http://localhost:3000/products/').subscribe(
        (res) => {
          this.products = res.json().products[this.id];
          this.productForm = new FormGroup({
            'name': new FormControl(this.products.name, Validators.required),
            'price': new FormControl(this.products.price, Validators.required),
            'productImage': new FormControl(this.products.productImage, Validators.required)
          })
        }        
      )
    }

    this.productForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'productImage': new FormControl('', Validators.required)
    })
  }

}
