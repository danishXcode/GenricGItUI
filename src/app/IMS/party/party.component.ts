import { Party } from './../Models/party';
import { IMSApiCallService } from './../services/imsapi-call.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  Pid:string;
  party : Party;
  constructor(private route: ActivatedRoute,public IMSApiCallService : IMSApiCallService) {
    route.params.subscribe(val => {
      this.route.params.subscribe(params => {
        this.Pid = params.Pid;
        });
      })

      this.IMSApiCallService.GetParty(this.Pid).subscribe({
        next:data=>
        {
          this.party = data;
        },
        error:e=>{
          alert(e);
        }
      })
      

   }

  ngOnInit(): void {
  }

}
