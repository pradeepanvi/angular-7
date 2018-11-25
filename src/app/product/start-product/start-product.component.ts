import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-start-product',
  templateUrl: './start-product.component.html',
  styleUrls: ['./start-product.component.scss']
})
export class StartProductComponent implements OnInit {
  products = [];

  constructor(public http:Http,
              public routes: ActivatedRoute,
              public router: Router,
              public productService: ProductService) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/products/').subscribe(
      (res) => {
        this.products = res.json().products;
        console.log(this.products);
      }
    )
  }

  addProduct(){
    this.router.navigate(['add'], {relativeTo: this.routes});
  }

  edit(id, productID){
    this.router.navigate(['edit/'+id], {relativeTo:this.routes});
    this.productService.setProductID(productID);
  }

  delete(id){

  }

}
