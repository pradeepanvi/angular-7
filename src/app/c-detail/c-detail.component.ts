import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-c-detail',
  templateUrl: './c-detail.component.html',
  styleUrls: ['./c-detail.component.scss']
})
export class CDetailComponent implements OnInit {
  cDetailForm:FormGroup;

  constructor(public http:Http) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    this.http.post('http://localhost:3000/confirm-detail', this.cDetailForm.value).subscribe(
      (res) => {
        console.log(res.json());
      }
    )
  }

  private initForm(){
    this.cDetailForm = new FormGroup({
      'email' : new FormControl('', Validators.required),
      'phone' : new FormControl('', Validators.required)
    })
  }

}
