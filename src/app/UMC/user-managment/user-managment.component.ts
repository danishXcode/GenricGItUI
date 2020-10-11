import { RegisterUserComponent } from './../register-user/register-user.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { Component,  Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {

 public _TenantId : string;
matdialog:MatDialog;
matDialogConfig:MatDialogConfig;
  constructor(private route:ActivatedRoute,_matdialog:MatDialog) { 
    this.matdialog = _matdialog;
    route.params.subscribe(val => {
      this.route.params.subscribe(params => {
        console.log("params.TenantId");
        console.log(params.TenantId);
        this._TenantId = params.TenantId;
        });
      })
  }

  ngOnInit(): void {
  }
  CreateUser()
  {
    const dilog = new MatDialogConfig();
    dilog.disableClose = true;
    dilog.autoFocus = true;
    dilog.width="60%";

    this.matdialog.open(RegisterUserComponent,dilog);
  }
}
