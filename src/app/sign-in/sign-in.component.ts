import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { SignInService } from '../shared/services/sign-in/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  recoverPwd = false;
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signInService: SignInService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({});
    this.loginFields.map(custom => {
      this.loginForm.addControl(custom.name, custom.formControl);
    });
    this.router.events.pipe(take(1)).subscribe((event: any) => {
      if (event.url === '/signIn/forgot-password') {
        this.recoverPwd = true;
        this.loginFields.pop();
      } else {
        this.loginFields.push({
          type: 'password',
          placeholder: 'Digite sua  senha',
          formControl: new FormControl(''),
          name: 'pwd'
        });
      }
    });
  }

  submit(){
    this.signInService.login();
    this.router.navigate(['../home'], { relativeTo: this.route.parent });
  }

}
