import { IMSApiCallService } from './../services/imsapi-call.service';
import { Component, OnInit } from '@angular/core';
import { Party } from '../Models/party';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {

  parties: Party[];
  constructor(public IMSApiCallService : IMSApiCallService) {
    this.IMSApiCallService.GetParties().subscribe({
      next:data=>
      {
        this.parties = data;
      } ,
      error:e=>{
        alert(e);
      }
      
    })
   }

  ngOnInit(): void {
  }

}
