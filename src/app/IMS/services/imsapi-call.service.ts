import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurchaseOrderModel, PurchaseOrderModels } from '../Models/PurchaseOder';

@Injectable({
  providedIn: 'root'
})
export class IMSApiCallService {
  private readonly URL = 'https://localhost:44364/PurchaseOrder/';
  constructor(private http: HttpClient) { }

  GetAll() : Observable<PurchaseOrderModel[]>
  {
    return this.http.get<PurchaseOrderModel[]>(this.URL+"GetPO");
  }
  GetById(id : any) : Observable<PurchaseOrderModel>
  {
    return this.http.get<PurchaseOrderModel>(this.URL+"GetPO").pipe(filter(p=>p.purchaseOrderName == id));
  }
}

