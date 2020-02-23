import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLogin: boolean;
  LoginOut: string;
  constructor(private loginservice: LoginService, private router: Router) {

    this.loginservice.authenticated
      .subscribe((value: boolean) => {
        console.log('subscribed value = ' + value);
        this.isLogin = value;
      });

  }

  ngOnInit() {
    this.isLogin = this.loginservice.isValidLogin();
  }

}
