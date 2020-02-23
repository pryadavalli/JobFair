import { Injectable } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public authenticated = new BehaviorSubject(null);
  private isLogin = false;
  Login(param: UserSettings): boolean {
    if (param.username === 'test' && param.password === 'test') {
      this.isLogin = true;
      this.authenticated.next(this.isLogin);
      return this.isLogin;
    } else {
      this.isLogin = false;
      this.authenticated.next(this.isLogin);
      return this.isLogin;
    }
  }
  isValidLogin(): boolean {
    return this.isLogin;
  }
  LogOut(): boolean {
    this.isLogin = false;
    this.authenticated.next(this.isLogin);
    return this.isLogin;
  }


}
