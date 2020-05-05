import { Component, OnInit } from '@angular/core';
import { SignInService } from '../shared/services/sign-in/sign-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  isHeader = true;

  constructor(private signInService: SignInService) { }

  ngOnInit(): void {
    this.isHeader = this.signInService.isLoggedIn();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
