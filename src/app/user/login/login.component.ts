import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from "@angular/http";
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public http:Http, public userService:UserService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    this.http.post('http://localhost:3000/user/login/', this.loginForm.value).subscribe(
      (res) => {
        console.log(res.json().token);
        this.userService.setToken(res.json().token);
      },
    )
    console.log(this.loginForm.value);
  }

  private initForm(){
    this.loginForm = new FormGroup({
      'email' : new FormControl('', Validators.required),
      'password' : new FormControl('', Validators.required)
    })
  }
}
