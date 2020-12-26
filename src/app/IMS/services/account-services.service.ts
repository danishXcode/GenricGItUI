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
  public  Url; GetFinancialDetailsURL ;AddFundsURL;GetStatementsURL: string;

  constructor(_APIconstantsService:APIconstantsService,private http: HttpClient,private fb : 
    FormBuilder) { 
    this.Url = _APIconstantsService.BasePurchaseOrderURL;
    this.GetFinancialDetailsURL = _APIconstantsService.GetFinancialDetails;
    this.AddFundsURL = _APIconstantsService.AddFunds;
  }

  AddFundsFormModel = this.fb.group({
    amount : [''],
    });
    GetStatementModel = this.fb.group({
      fromDate : [''],
      toDate:['']
      });
    

  GetFinancialDetails()
  {
      return this.http.get<FinancialStatementModel>(this.Url + this.GetFinancialDetailsURL);
      //return this.GetStatements();
  }

  GetStatements():Observable<FinancialStatementModel>
  {
    var body = {
      fromDate : this.GetStatementModel.value.fromDate,
      toDate : this.GetStatementModel.value.toDate,
      
    };
    console.log("body")

    const data =  JSON.stringify(body);  
    
    console.log(data);
    const headers =  {
      headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
    };
      let amnt = this.AddFundsFormModel.value.amount;
      return this.http.post<FinancialStatementModel>(this.Url+ this.GetFinancialDetailsURL,data,headers);
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
