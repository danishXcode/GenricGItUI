import { FinancialStatementModel } from './../Models/FinancialStatementModel';
import { AccountServicesService } from './../services/account-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-statement',
  templateUrl: './financial-statement.component.html',
  styleUrls: ['./financial-statement.component.css']
})
export class FinancialStatementComponent implements OnInit {

  constructor(private _AccountServicesService:AccountServicesService) { }
  FinancialStatementModel : FinancialStatementModel;
  ngOnInit(): void {
     this._AccountServicesService.GetFinancialDetails().subscribe({
       next:data=>
       {
         console.log("data");
         console.log(data);
         this.FinancialStatementModel = data[0];
       }
     })
  }

}
