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
  submitted=false;
  constructor(public service: UMCServicesService,private router: Router){}
  ngOnInit(): void {
  }

  Login(loginForm : NgForm)
  {
   
  }

  onLoginSubmit()
  {
    this.submitted = true;
    if (this.service.LoginFormModel.invalid) {
      return;
   }
    console.log("onLoginSubmit");
   this.service.Login();
  
  //   this.router.navigate(['/'+pagename,{dummyData: (new Date).getTime()}]);
  // }
  };

  
  get f() { return this.service.LoginFormModel.controls; }
}
