import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIconstantsService } from '../apiconstants.service';
import { FinancialStatementModel } from '../Models/FinancialStatementModel';

@Injectable({
  providedIn: 'root'
})
export class AccountServicesService {
  public  Url; GetFinancialDetailsURL ;AddFundsURL: string;

  constructor(_APIconstantsService:APIconstantsService,private http: HttpClient,private fb : 
    FormBuilder) { 
    this.Url = _APIconstantsService.BasePurchaseOrderURL;
    this.GetFinancialDetailsURL = _APIconstantsService.GetFinancialDetails;
    this.AddFundsURL = _APIconstantsService.AddFunds;
  }

  AddFundsFormModel = this.fb.group({
    amount : [''],
    });

  GetFinancialDetails():Observable<FinancialStatementModel>
  {
      return this.http.get<FinancialStatementModel>(this.Url + this.GetFinancialDetailsURL);
  }
  AddFunds()
  {
    const headers =  {
     headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
   };
     let amnt = this.AddFundsFormModel.value.amount;
     return this.http.post(this.Url+ this.AddFundsURL+amnt,null,headers);
  }
}
