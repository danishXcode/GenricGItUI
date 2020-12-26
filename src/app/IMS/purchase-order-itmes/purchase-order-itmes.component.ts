import { IMSApiCallService } from './../services/imsapi-call.service';
import { Item, PurchaseOrderItemModel } from './../Models/PurchaseOder';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PurchaseOrderItmesDataSource, PurchaseOrderItmesItem } from './purchase-order-itmes-datasource';

@Component({
  selector: 'app-purchase-order-itmes',
  templateUrl: './purchase-order-itmes.component.html',
  styleUrls: ['./purchase-order-itmes.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
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
Items:Item[];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['item', 'quantity', 'amount', "total","itemId"];
   TotalAmountForallTIetms:number = 0;
  constructor(public imsApiCallService: IMSApiCallService,public cd: ChangeDetectorRef)
 {

  }
  ngOnInit() {
    this.dataSource = new PurchaseOrderItmesDataSource();
    this.POid=this._POID;

    this.imsApiCallService.GetAll().subscribe(data => {
      data.forEach( e=>{
       if(e.purchaseOrderID == this.POid)
       {
          this.dataSource.data = e.items;
          this.dataSource.data.forEach(function (POI) {
            POI.total = POI.amount * POI.quantity;
          });

          console.log("data -- ")
          
          console.log( e.items)
        }
      })
    })

    this.imsApiCallService.GetItems().subscribe(
      {
        next:data=>
        {
          this.Items =data;
        }
      }
    )
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
        window.location.reload();
      }
    });
    
    
  }

  OnPaySubmit()
  {
    this.imsApiCallService.PurchaseOrderPay().subscribe(
      {
        next:data=>{
          window.location.reload();
        }
      }
    );
  }
  OnSubmitAddItem() {
    let Poid = this.imsApiCallService.AddPurchaseOrderFormModel.value.purchaseOrderID;
    this.imsApiCallService.AddPOItem().subscribe({
      next:data=>
      {
        window.location.reload();
      }
    }); 
  }
}
 
