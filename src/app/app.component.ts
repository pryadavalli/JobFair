import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JobFair';
  constructor(private loginservice: LoginService, private router: Router) {

  }
  ngOnInit(): void {


  }

}
