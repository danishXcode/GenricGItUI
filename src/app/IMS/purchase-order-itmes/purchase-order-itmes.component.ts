import { IMSApiCallService } from './../services/imsapi-call.service';
import { PurchaseOrderItemModel } from './../Models/PurchaseOder';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PurchaseOrderItmesDataSource, PurchaseOrderItmesItem } from './purchase-order-itmes-datasource';

@Component({
  selector: 'app-purchase-order-itmes',
  templateUrl: './purchase-order-itmes.component.html',
  styleUrls: ['./purchase-order-itmes.component.css']
})
export class PurchaseOrderItmesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PurchaseOrderItemModel>;
  dataSource: PurchaseOrderItmesDataSource;
  @Input() PurchaseOrderItemModels: PurchaseOrderItemModel[];
  @Input() _POID: string;

  div1: boolean = false;
POid:string;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['itemName', 'quantity', 'amount', "total","itemId"];
   TotalAmountForallTIetms:number = 0;
  constructor(public imsApiCallService: IMSApiCallService)
 {

  }
  ngOnInit() {
    this.dataSource = new PurchaseOrderItmesDataSource();
    this.PurchaseOrderItemModels.forEach(function (POI) {
      POI.total = POI.amount * POI.quantity;
    });
    this.dataSource.data = this.PurchaseOrderItemModels;
    this.POid=this._POID;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  ShowPOI() {
    this.div1 = true;

  }
  AddtoTatal(amt:number)
  {

  }
  DeletePOI(POIiD)
  {
    console.log("Delete POI")
    console.log(this.POid);
    this.imsApiCallService.DeletePOOrderItem(this.POid,POIiD).subscribe({
      next:data=>{
        console.log(data);
        window.location.reload();
      }
    });
    
    
  }

  OnPaySubmit()
  {
    this.imsApiCallService.PurchaseOrderPay().subscribe();
  }
  OnSubmitAddItem() {
    let Poid = this.imsApiCallService.AddPurchaseOrderFormModel.value.purchaseOrderID;
    this.imsApiCallService.AddPOItem().subscribe({
      next:data=>
      {
        console.log(data);
        
    window.location.reload();
      }
    }); 
  }
}
 
