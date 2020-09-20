import { Router } from '@angular/router';
import { IMSApiCallService } from './../services/imsapi-call.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PurchaseOrderModel, PurchaseOrderModels } from '../Models/PurchaseOder';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.css']
})
export class PurchaseOrdersComponent implements OnInit {
  ApiSubscription : Subscription;
  ReadSubscription : Subscription;
  POS:PurchaseOrderModel[];
  

  constructor(private imsApiCallService : IMSApiCallService,private router: Router) { }

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
}
