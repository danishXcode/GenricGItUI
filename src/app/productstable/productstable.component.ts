import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMSApiCallService } from './../IMS/services/imsapi-call.service';
import { PurchaseOrderModel } from './../IMS/Models/PurchaseOder';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductstableDataSource, ProductstableItem } from './productstable-datasource';

@Component({
  selector: 'app-productstable',
  templateUrl: './productstable.component.html',
  styleUrls: ['./productstable.component.css']
})
export class ProductstableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PurchaseOrderModel>;
  dataSource: ProductstableDataSource;
  ApiSubscription : Subscription;
  div1:boolean=false;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['purchaseOrderName','approvedBy', 'requiredDate','isComplited'];

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
        
    window.location.reload();
      }
    }); 
  }
}
