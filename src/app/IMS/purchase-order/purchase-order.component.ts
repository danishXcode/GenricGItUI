import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { IMSApiCallService } from './../services/imsapi-call.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { PurchaseOrderModel } from '../Models/PurchaseOder';
import { Console } from 'console';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialog , MatDialogConfig} from '@angular/material/dialog'
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class PurchaseOrderComponent implements OnInit {
  ApiSubscription : Subscription;
  POName : string;
  ReadSubscription : Subscription;
  POS:PurchaseOrderModel[];
  PO: PurchaseOrderModel;
  private dialog: MatDialog;
  poImgNames : string [];
    matInputModule : MatInputModule ;
  div1 : boolean = false;

  constructor(private route: ActivatedRoute,public imsApiCallService : IMSApiCallService) { 
    
    route.params.subscribe(val => {
      this.route.params.subscribe(params => {
        this.POName = params.POName;
        });
    
        this.ReadSubscription = this.imsApiCallService.GetAll().subscribe(data => {
          data.forEach( e=>{
           if(e.purchaseOrderID == this.POName)
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
 
}
