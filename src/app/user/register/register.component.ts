import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(public http:Http) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    this.http.post('http://localhost:3000/user/signup/', this.registerForm.value).subscribe(
      (res) => {
        console.log(res.json());
      }
    )
    console.log(this.registerForm.value);
  }

  private initForm(){
    this.registerForm = new FormGroup({
      'email' : new FormControl('', Validators.required),
      'password' : new FormControl('', Validators.required)
    })
  }
}
