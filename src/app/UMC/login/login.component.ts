import { UMCServicesService } from './../umcservices.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: UMCServicesService){}
  ngOnInit(): void {
  }

  Login(loginForm : NgForm)
  {
   
  }

  onLoginSubmit()
  {
    this.service.Login();
  }
}
