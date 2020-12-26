import { Party } from './../IMS/Models/party';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMSApiCallService } from './../IMS/services/imsapi-call.service';
import { PurchaseOrderModel } from './../IMS/Models/PurchaseOder';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductstableDataSource, ProductstableItem } from './productstable-datasource';

@Component({
  selector: 'app-productstable',
  templateUrl: './productstable.component.html',
  styleUrls: ['./productstable.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class ProductstableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PurchaseOrderModel>;
  dataSource: ProductstableDataSource;
  ApiSubscription : Subscription;
  div1:boolean=false;
  parties:Party[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['purchaseOrderName','approvedBy', 'requiredDate','isComplited','purchaseOrderID'];

  constructor(public imsApiCallService : IMSApiCallService,private router: Router)
  {

  }
  ngOnInit() {


    this.dataSource = new ProductstableDataSource();
    
    this.ApiSubscription = this.imsApiCallService.GetAll().subscribe({
      next:data=>
      {
        this.dataSource.data = data;
      }
    });

    this.imsApiCallService.GetParties().subscribe({
    next:data=>
    {
      this.parties = data;
    },
    error:e=>console.error(e)
    });
  }
  redirect(pagename: string)
  {
    console.log("redirecvt to "+pagename);
    this.router.navigate(['/'+pagename]);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ShowPO()
  {
    this.div1 = true;
  }

  OnSubmitAdd()
  { 
    this.imsApiCallService.AadPurchaseOrder().subscribe(
    {next:data=>
      {
        console.log(data);
        
       this.ngOnInit();
       this.ngAfterViewInit();
      }
    }); 
  }
}
