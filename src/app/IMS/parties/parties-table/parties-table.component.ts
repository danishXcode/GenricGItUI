import { Router } from '@angular/router';
import { IMSApiCallService } from './../../services/imsapi-call.service';
import { Party } from './../../Models/party';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PartiesTableDataSource, PartiesTableItem } from './parties-table-datasource';

@Component({
  selector: 'app-parties-table',
  templateUrl: './parties-table.component.html',
  styleUrls: ['./parties-table.component.css']
})
export class PartiesTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Party>;
  dataSource: PartiesTableDataSource;

 div1 = false;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['partyName', 'contact','totalTrasaction','pendingTrasaction','partyId'];
      constructor(public IMSApiCallService:IMSApiCallService,private route:Router)
   {
    this.dataSource = new PartiesTableDataSource();
  
      }

  ngOnInit() {

    this.IMSApiCallService.GetParties().subscribe({
      next:data=>
      {
        console.log(data);
        this.dataSource.data = data;
      } ,
      error:e=>{
        alert(e);
      }
      
    })
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ShowForm()
  {
    this.div1 = true;
  }

  DeleteParty(id)
  {

  }
  Redirect(id)
  {
    console.log("reIDrecting "+"/Party/"+id) ;

    this.route.navigate(["/Party/"+id]);
  }
  OnSubmitAddParty()
  {
    this.IMSApiCallService.AddParty().subscribe({
      next:data=>
      {
        alert("Pary added");
        window.location.reload();
      },
      error:e=>alert(e)
    })
  }

}
