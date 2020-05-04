import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  company() {
    this.router.navigate(['./register', 'cnpj'], { relativeTo: this.route.parent });
  }

  customer() {
    this.router.navigate(['./register', 'cpf'], { relativeTo: this.route.parent });
  }

}
