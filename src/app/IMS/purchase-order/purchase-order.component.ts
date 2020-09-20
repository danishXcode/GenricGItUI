import { ActivatedRoute } from '@angular/router';
import { IMSApiCallService } from './../services/imsapi-call.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PurchaseOrderModel } from '../Models/PurchaseOder';
import { Console } from 'console';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit,OnDestroy {
  ApiSubscription : Subscription;
  POName : string;
  ReadSubscription : Subscription;
  POS:PurchaseOrderModel[];
  PO: PurchaseOrderModel;

  constructor(private route: ActivatedRoute,private imsApiCallService : IMSApiCallService) { 
    console.log("PO-Con");
    route.params.subscribe(val => {
      this.route.params.subscribe(params => {
        this.POName = params.POName;
        });
    
        this.ReadSubscription = this.imsApiCallService.GetAll().subscribe(data => {
          data.forEach( e=>{
           if(e.purchaseOrderName == this.POName)
           {
              this.PO = e;
           }
         })
      });
    });
  }
 
  
  ngOnInit(): void {
    console.log("PO-ngOnInit");
  }
  ngOnDestroy()
  {
    this.ApiSubscription.unsubscribe();
    this.ReadSubscription.unsubscribe();
  }
}
