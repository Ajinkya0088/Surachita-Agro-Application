import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '',name: '',age: "", members_count:0 , gender: "", phonenumber: "", members: [] };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/about');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}