import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class LoginService {
  isLoggedIn: boolean = false;
  constructor() { }

  login(user: User): boolean {
    if (user.password === 'admin' && user.userName === 'admin') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }
}
