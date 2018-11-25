import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(public http:Http,
              public userService:UserService) { }

  ngOnInit() {
    const headers = new Headers({'Authorization':this.userService.token})
    this.http.get('http://localhost:3000/orders', {headers:headers}).subscribe(
      (res) => {
        console.log(res.json().orders)
      }
    )
  }

}
