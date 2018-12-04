import { Http } from "@angular/http";
import { UserService } from "./user.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
    productId:string;

    constructor(public http:Http,
                public userService:UserService){}

    addProduct(value){
        console.log(this.userService.token);
        console.log(value);
        this.http.post('http://localhost:3000/products/', value).subscribe(
            (res) => {
                console.log(res.json())
            }
        )
    }
    updateProduct(value){
        console.log(this.productId);
        const headers = new Headers({'Authorization':this.userService.token})
        this.http.patch('http://localhost:3000/products/'+this.productId, {headers: headers}, value).subscribe(
            (res) => {
                console.log(res.json())
            }
        )
    }
    setProductID(id){
        this.productId = id;
    }
}