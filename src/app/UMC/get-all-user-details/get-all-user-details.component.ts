import { ActivatedRoute } from '@angular/router';
import { UMCServicesService } from './../umcservices.service';
import { Component, OnInit, Input } from '@angular/core';
import {UserDetailsModel} from './../Models/User'
@Component({
  selector: 'app-get-all-user-details',
  templateUrl: './get-all-user-details.component.html',
  styleUrls: ['./get-all-user-details.component.css']
})

export class GetAllUserDetailsComponent implements OnInit {

 
  userDeatailsModels : UserDetailsModel[];    
  @Input() TenantId : string;
  Tid:string;
  constructor(private _UMCServicesService : UMCServicesService,private route: ActivatedRoute) {
    console.log("this.TenantId");
    console.log(this.TenantId);
    
   }

  ngOnInit(): void {
    console.log("this.TenantId ng onit"+this.TenantId);
    this._UMCServicesService.GetAllUserDetails(this.TenantId).subscribe(
      {
        next:data=>
        {
          this.userDeatailsModels = data;
        },
        error:e=>
        {
          alert(e)
        }
        
      }
    )
  }

}
