import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-quatation',
  templateUrl: './quatation.component.html',
  styleUrls: ['./quatation.component.scss']
})
export class QuatationComponent implements OnInit {
  quatationForm:FormGroup;

  constructor(public http:Http) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    this.http.post('http://localhost:3000/quatation', this.quatationForm.value).subscribe(
      (res) => {
        console.log(res.json());
      }
    )
  }

  private initForm(){
    this.quatationForm = new FormGroup({
      'product' : new FormControl('', Validators.required),
      'quntity' : new FormControl('', Validators.required)
    })
  }

}
