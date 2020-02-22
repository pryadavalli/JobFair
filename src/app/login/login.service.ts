import { Injectable } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Login(param: UserSettings): boolean {
    if (param.username === 'test' && param.password === 'test') {
      return true;
    } else {
      return false;
    }
  }

}
