import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../service/login/login.service';
import { User } from '../service/login/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  color: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.color = 'blue';
  }

  login() {
    if (this.loginService.login(this.user)) {
      this.router.navigate(['student']);
    }
  }

}
