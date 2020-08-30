import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  user: UserOptions = { username: '', password: '',name: '',age: "", members_count:0 , gender: "", phonenumber: "", members: [] };
  submitted = false;
  password="";
  members=[];
  message ="";
  flag = false;
  flag1=false;
  flag2 =false;
  flag3=false;
  flag4=false;
  flag5=false;
  flag6 =false;
  flag7 =false;
  flag8 =false;
  flag9 =false;
  flag10=false;
  f=false;
  agree = "";
  constructor(
    public router: Router,
    public userData: UserData,
    private http: HttpClient
  ) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
        this.user.members=this.members;
        this.user={name:"",username:"",password:"",age:"",members_count:0,gender:"",phonenumber:"",members:[]};
        this.userData.signup(this.user.username);
        this.router.navigateByUrl('/login');
    }
  }

  i:number=0;
  change(event){
    console.log(event);
    this.members=[];
    for(this.i=0;this.i<this.user.members_count;this.i++){
      this.members.push({name:"",age:"",gender:""});
    }
  }

}
