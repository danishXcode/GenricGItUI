

import { AccountServicesService } from './../services/account-services.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-fund-dialogue',
  templateUrl: './add-fund-dialogue.component.html',
  styleUrls: ['./add-fund-dialogue.component.css']
})
export class AddFundDialogueComponent implements OnInit {

  constructor(public accountServicesService : AccountServicesService,
    public matDialogRef: MatDialogRef<AddFundDialogueComponent>) { }
     
  
  ngOnInit(): void {
  }
  OnSubmitAddFund()
  {
    this.accountServicesService.AddFunds().subscribe(
      {
        next:data=>
        {
          this.matDialogRef.close();
          window.location.reload(); 
        }
      }
    );
  }
  OnClose()
  {
   this.matDialogRef.close();
  }
}

