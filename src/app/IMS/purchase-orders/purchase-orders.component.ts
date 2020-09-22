import { Router } from '@angular/router';
import { IMSApiCallService } from './../services/imsapi-call.service';
import { Subscription } from 'rxjs';
import { Component, NgZone, OnInit } from '@angular/core';
import { PurchaseOrderModel, PurchaseOrderModels } from '../Models/PurchaseOder';
import {MatDialog , MatDialogConfig} from '@angular/material/dialog'
import { NgForm, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.css']
})
export class PurchaseOrdersComponent implements OnInit {
  ApiSubscription : Subscription;
  ReadSubscription : Subscription;
  POS:PurchaseOrderModel[];
  div1:boolean=false;
  
  constructor(public imsApiCallService : IMSApiCallService,private router: Router,private ngZone: NgZone) 
  { }

  ngOnInit(): void {
    this.ApiSubscription = this.imsApiCallService.GetAll().subscribe({
      next:data=>
      {
        this.POS = data;
      }
    });
  }
  redirect(pagename: string)
  {
    console.log("redirecvt to "+pagename);
    this.router.navigate(['/'+pagename,{dummyData: (new Date).getTime()}]);
  }

  reloadData()
  {
    this.ApiSubscription = this.imsApiCallService.GetAll().subscribe(
      {
      next:data=>
       {
        this.ngZone.run( () => {
          this.POS = data;
       });
       },
     }
    );
  }

  Create()
  {
      //this.dialog.open()
  }

  ShowPO()
  {
    this.div1 = true;
  }

  OnSubmitAdd()
  {
    this.imsApiCallService.AadPurchaseOrder();
    this.reloadData();
  }
}
