import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurchaseOrderModel, PurchaseOrderModels } from '../Models/PurchaseOder';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class IMSApiCallService {
  private readonly URL = 'https://localhost:44364/PurchaseOrder/';
  constructor(private http: HttpClient,private fb : FormBuilder) { }

  
  form : FormGroup = new FormGroup({
    $key: new FormControl(null),
    purchaseOrderName: new FormControl(''),
    requiredDate: new FormControl('')
  });

  AddPurchaseOrderFormModel = this.fb.group({
    PurchaseOrderName : [''],
    RequiredDate : [''],
    })

  GetAll() : Observable<PurchaseOrderModel[]>
  {
    return this.http.get<PurchaseOrderModel[]>(this.URL+"GetPO");
  }
  GetById(id : any) : Observable<PurchaseOrderModel>
  {
    return this.http.get<PurchaseOrderModel>(this.URL+"GetPO").pipe(filter(p=>p.purchaseOrderName == id));
  }

  AadPurchaseOrder()
  {
    var body = {
      PurchaseOrderName : this.AddPurchaseOrderFormModel.value.PurchaseOrderName,
      RequiredDate : this.AddPurchaseOrderFormModel.value.RequiredDate,
    };
    console.log(body);
    const data =  JSON.stringify(body);  
    const headers =  {
      headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
    };
    //const config = { headers: new Hpp().set('Content-Type', 'application/json') };
    return this.http.post<any>(this.URL+'AddPo', data,headers).subscribe({
      next: data => {
        alert("Record Added")
        console.log(data)
      },
      error: error => console.error('There was an error!', error)
  });
  }

}

