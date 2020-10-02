import { Router } from '@angular/router';
import { UMCServicesService } from './../umcservices.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: UMCServicesService,private router: Router){}
  ngOnInit(): void {
  }

  Login(loginForm : NgForm)
  {
   
  }

  onLoginSubmit()
  {
    console.log("onLoginSubmit");
   this.service.Login();
  
  //   this.router.navigate(['/'+pagename,{dummyData: (new Date).getTime()}]);
  // }
  };
}
