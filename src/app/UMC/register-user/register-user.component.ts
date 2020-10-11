import { Router } from '@angular/router';
import { UMCServicesService } from './../umcservices.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  submitted = false;
  constructor(public service: UMCServicesService,
    private router: Router,
    
    public matDialogRef: MatDialogRef<RegisterUserComponent>) { }


  ngOnInit(): void {
  }
   onRegisterSubmit()
  {
    this.submitted = true;
    if (this.service.RegistrationUserFormModel.invalid) {
      return;
   }
    console.log("On Submit called");
    this.service.RegisterUser().subscribe({
      next: data => 
      {
       window.location.reload();
      },
      error: error => alert('There was an error!')
  })
  }

  OnClose()
  {
    this.matDialogRef.close();
  }
  get f() { return this.service.RegistrationUserFormModel.controls; }
}
