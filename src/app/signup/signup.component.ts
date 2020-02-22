import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  }

  Save() {
    console.log('Saving the userinfo');
  }
}
