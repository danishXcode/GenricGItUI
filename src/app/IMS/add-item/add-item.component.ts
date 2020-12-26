import { Router } from '@angular/router';
import { IMSApiCallService } from './../services/imsapi-call.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddITemComponent implements OnInit {
  submitted = false;
  constructor(public service: IMSApiCallService,
    private router: Router,
    
    public matDialogRef: MatDialogRef<AddITemComponent>) { }

  ngOnInit(): void {
  }
  onRegisterItem()
  {
    this.submitted = true;
    if (this.service.onRegisterItemModel.invalid) {
      return;
   }
      this.service.AddITem().subscribe({
        next:data=>
        {
          this.matDialogRef.close();
          window.location.reload();
        },
        error:e=>
        {
        alert(e);
        }
      })
  }
  OnClose()
  {
    this.matDialogRef.close();
  }
  get f() { return this.service.onRegisterItemModel.controls; }
}
