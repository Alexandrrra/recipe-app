import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service'; 
import {ApiService} from '../../services/api.service' 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(
    private _api : ApiService, 
    private _auth: AuthService,
    private router: Router,  
    private fb: FormBuilder
  ) {}

  ngOnInit() {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  login(){ 
    let body = this.loginForm.value;
    this._api.postTypeRequest('login', body).subscribe((res: any) => {
      console.log(res);
      if(res.access_token){ 
        this._auth.setDataInLocalStorage('token', res.access_token);
        this.router.navigate(['home']); 
      } 
    }, err => { 
      console.log(err); 
    }); 
  } 
 
}

  // onSubmit(form: FormGroup) {
  //   console.log('Valid?', form.valid); // true or false
  //   console.log('Login', form.value.login);
  //   console.log('Password', form.value.password);
  // }

