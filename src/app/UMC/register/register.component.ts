import { UMCServicesService } from './../umcservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: UMCServicesService) { }

  ngOnInit(): void {
  }
  onRegisterSubmit()
  {
    console.log("On Submit called");
    this.service.Register().subscribe({
      next: data => console.log(data),
      error: error => console.error('There was an error!', error)
  })
  }
}
