import { FinancialStatementModel } from './../Models/FinancialStatementModel';
import { AccountServicesService } from './../services/account-services.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-financial-statement',
  templateUrl: './financial-statement.component.html',
  styleUrls: ['./financial-statement.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class FinancialStatementComponent implements OnInit {

  public FinancialStatementModel : FinancialStatementModel;
  constructor(public _AccountServicesService:AccountServicesService) { }
  
  ngOnInit(): void {
     this._AccountServicesService.GetFinancialDetails().subscribe({
       next:data=>
       {
         console.log("data");
         console.log(data);
         this.FinancialStatementModel = data;
       }
     })
  }

  GetStatment()
  {
    this._AccountServicesService.GetStatements().subscribe(
      {
        next:data=>
        {
        this.FinancialStatementModel = data;
        }
      }
    );
  }
}
