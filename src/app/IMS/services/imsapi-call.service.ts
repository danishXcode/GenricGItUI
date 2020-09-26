import { APIconstantsService } from './../apiconstants.service';
import { JsonReadServiceService } from './../../services/json-read-service.service';
import { PurchaseOrderItemModel } from './../Models/PurchaseOder';
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
    
  private  URL;AddPoURL ;GetPOSURl ;AddPOIURl;DeletePOOrderItemURL : string ="";

  constructor(private http: HttpClient,private fb : FormBuilder,_APIconstantsService:APIconstantsService) { 
    this.URL = _APIconstantsService.BasePurchaseOrderURL;
    this.AddPoURL = _APIconstantsService.AddPurhcaseOrderURL;
    this.GetPOSURl =_APIconstantsService.GetPurchaseOrderURL;
    this.AddPOIURl = _APIconstantsService.AddPurhcaseOrderItemURL;
    this.DeletePOOrderItemURL =_APIconstantsService.DeletePOOrderItemURL;
  }

  
  form : FormGroup = new FormGroup({
    $key: new FormControl(null),
    purchaseOrderName: new FormControl(''),
    requiredDate: new FormControl('')
  });

  AddPurchaseOrderFormModel = this.fb.group({
    PurchaseOrderName : [''],
    RequiredDate : [''],
    });

    AddPOItemFormModel = this.fb.group({
      amount: [''],
      itemName: [''],
      purchaseOrderID: [''],
      quantity: [''],
      })
  
     public FormDataOrderItem: PurchaseOrderItemModel;
  GetAll() : Observable<PurchaseOrderModel[]>
  {
    console.log(this.URL+this.GetPOSURl);
    return this.http.get<PurchaseOrderModel[]>(this.URL+this.GetPOSURl);
  }
  GetById(id : any) : Observable<PurchaseOrderModel>
  {
    return this.http.get<PurchaseOrderModel>(this.URL+this.GetPOSURl).pipe(filter(p=>p.purchaseOrderName == id));
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
  return this.http.post<any>(this.URL+this.AddPoURL, data,headers);
  }

  AddPOItem()
  {

   
    var body = {
      ItemName : this.AddPOItemFormModel.value.itemName,
      Quantity : parseInt(this.AddPOItemFormModel.value.quantity),
      Amount :parseInt( this.AddPOItemFormModel.value.amount),
      PurchaseOrderID : this.AddPOItemFormModel.value.purchaseOrderID,
    };
    console.log("AddPOItem");
    console.log(body);
    const data =  JSON.stringify(body);  
    const headers =  {
      headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
    };
  return this.http.post<any>(this.URL+this.AddPOIURl, data,headers);
  }

  DeletePOOrderItem(POid,POIiD)
  {
   var body = {
     PurhcaseId : POid,
     ItemID :POIiD,
   };
   const data =  JSON.stringify(body); 
   const headers =  {
    headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
    return this.http.post(this.URL+ this.DeletePOOrderItemURL,data,headers);
  }

}

