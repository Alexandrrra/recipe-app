import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service'; 
import {ApiService} from '../../services/api.service' 
 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private _api : ApiService, 
    private _auth: AuthService, 
  ) { }

  ngOnInit(): void {
    this.test_jwt() 
  }

  test_jwt(){ 
    this._api.getTypeRequest('test-jwt').subscribe((res: any) => { 
      console.log(res) 
 
    }, err => { 
      console.log(err) 
    }); 
  } 
}
