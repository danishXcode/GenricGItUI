import { IMSApiCallService } from './../services/imsapi-call.service';
import { AddITemComponent } from './../add-item/add-item.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Item } from '../Models/PurchaseOder';

@Component({
  selector: 'app-item-managment',
  templateUrl: './item-managment.component.html',
  styleUrls: ['./item-managment.component.css']
})
export class ITemManagmentComponent implements OnInit {

  matDialogConfig:MatDialogConfig;
  Items:Item [];
    constructor(private route:ActivatedRoute,public _matdialog:MatDialog,public api:IMSApiCallService) { 
      this.api.GetItems().subscribe(
        {
          next:data=>
          {
            this.Items =data;
          }
        }
      )
    }
  ngOnInit(): void {
      this.api.GetItems().subscribe(
        {
          next:data=>
          {
            this.Items =data;
          }
        }
      )
  }
  CreateItem()
  {
    const dilog = new MatDialogConfig();
    dilog.disableClose = true;
    dilog.autoFocus = true;
    dilog.width="60%";
    this._matdialog.open(AddITemComponent,dilog);
  }

}
