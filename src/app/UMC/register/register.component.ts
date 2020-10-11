import { Router } from '@angular/router';
import { UMCServicesService } from './../umcservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: UMCServicesService,private router: Router) { }
  submitted = false;
  ngOnInit(): void {
  }
  onRegisterSubmit()
  {
    this.submitted = true;
    
    console.log("this.service.RegistrationFormModel");
    console.log(this.service.RegistrationFormModel);
    if (this.service.RegistrationFormModel.invalid) {
      return;
   }
    console.log("On Submit called");
    this.service.Register().subscribe({
      next: data => 
      {
        this.router.navigate(["Login"])
      },
      error: error => alert('There was an error!')
  })
  }
  get f() { return this.service.RegistrationFormModel.controls; }
}
