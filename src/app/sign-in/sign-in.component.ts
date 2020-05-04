import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginFields = [
    {
      type: 'text',
      placeholder: 'Digite seu e-mail',
      formControl: new FormControl(''),
      name: 'email'
    },
    {
      type: 'password',
      placeholder: 'Digite sua  senha',
      formControl: new FormControl(''),
      name: 'pwd'
    },
  ];
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({});
    this.loginFields.map(custom => {
      this.loginForm.addControl(custom.name, custom.formControl);
    });
  }

  submit(){
    console.log(this.loginForm.value);
    
  }

}
