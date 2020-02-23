import { Component, OnInit, Output } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { UserSettings } from '../data/user-settings';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login';
  lblUsername = 'Username';
  lblPassword = 'Password';

  oringinaluserSettings: UserSettings = {
    username: null,
    password: null
  };

  userSettings: UserSettings = { ... this.oringinaluserSettings };
  constructor(private loginservice: LoginService, private router: Router) {

  }

  ngOnInit() {
    this.loginservice.LogOut();
    this.userSettings.username = 'test';
    this.userSettings.password = 'test';
  }

  OnBlur(model: NgModel) {
    console.log(model.valid);
    console.log(model.value);
  }
  OnSubmit(form: NgForm) {
    const isLogin = this.loginservice.Login(form.value);
    if (isLogin) {
      console.log('login success');
      this.router.navigate(['/home']);
    } else {
      console.log('login failed');
      this.router.navigate(['/login']);
    }
  }

}
