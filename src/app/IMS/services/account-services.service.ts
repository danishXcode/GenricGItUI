import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIconstantsService } from '../apiconstants.service';
import { FinancialStatementModel } from '../Models/FinancialStatementModel';

@Injectable({
  providedIn: 'root'
})
export class AccountServicesService {
  public  Url; GetFinancialDetailsURL : string;

  constructor(_APIconstantsService:APIconstantsService,private http: HttpClient) { 
    this.Url = _APIconstantsService.BasePurchaseOrderURL;
    this.GetFinancialDetailsURL = _APIconstantsService.GetFinancialDetails;
  }

  GetFinancialDetails():Observable<FinancialStatementModel>
  {
      return this.http.get<FinancialStatementModel>(this.Url + this.GetFinancialDetailsURL);
  }
}
