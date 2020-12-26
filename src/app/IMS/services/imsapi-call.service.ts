import { AddITemComponent } from './../add-item/add-item.component';
import { APIconstantsService } from './../apiconstants.service';
import { JsonReadServiceService } from './../../services/json-read-service.service';
import { Item, PurchaseOrderItemModel } from './../Models/PurchaseOder';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurchaseOrderModel, PurchaseOrderModels } from '../Models/PurchaseOder';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DashBoardData } from '../Models/DashBoardData';
import { Party } from '../Models/party';

@Injectable({
  providedIn: 'root'
})
export class IMSApiCallService {
    
  private  URL;AddPoURL ;GetPOSURl ;AddPOIURl;DeletePOOrderItemURL;GetDashBoardURL;GetPartiesURL;AddPartyURL;
  GetPartyURL ;PurChaseOrderPayURL;AddItemURl;GetITemURl: string ="";

  constructor(private http: HttpClient,private fb : 
    FormBuilder,_APIconstantsService:APIconstantsService) { 
    this.URL = _APIconstantsService.BasePurchaseOrderURL;
    this.AddPoURL = _APIconstantsService.AddPurhcaseOrderURL;
    this.GetPOSURl =_APIconstantsService.GetPurchaseOrderURL;
    this.AddPOIURl = _APIconstantsService.AddPurhcaseOrderItemURL;
    this.DeletePOOrderItemURL =_APIconstantsService.DeletePOOrderItemURL;
   this.GetDashBoardURL=_APIconstantsService.GetDashBoard; 
   this.GetPartiesURL = _APIconstantsService.GetParties;
    this.AddPartyURL = _APIconstantsService.AddParty;
    this.GetPartyURL = _APIconstantsService.GetParty;
    this.PurChaseOrderPayURL = _APIconstantsService.PuchaseOrderPay;
    this.AddItemURl = _APIconstantsService.AddITems;
    this.GetITemURl = _APIconstantsService.GetITems;
  }

  
  form : FormGroup = new FormGroup({
    $key: new FormControl(null),
    purchaseOrderName: new FormControl(''),
    requiredDate: new FormControl('')
  });

  AddPurchaseOrderFormModel = this.fb.group({
    PurchaseOrderName : [''],
    RequiredDate : [''],
    partyId:['']
    });

    AddPOItemFormModel = this.fb.group({
      amount: [''],
      itemName: [''],
      purchaseOrderID: [''],
      quantity: [''],
      ItemId:['']
      })

      AddPartyFromModel = this.fb.group({
        totalTrasaction: [''],
        pendingTrasaction: [''],
        emailid: [''],
        partyName: [''],
        contact: [''],
        })

        PaymentDetails = this.fb.group({
          Amount:[''],
          Uid:['']
        })
        onRegisterItemModel = this.fb.group({
          ITemName :['',Validators.required],
          Code :[''],
         Descirption :[''],
         UoM :['',Validators.required],
        Stock:[''],
        })
  
     public FormDataOrderItem: PurchaseOrderItemModel;
  GetAll() : Observable<PurchaseOrderModel[]>
  {
    console.log(this.URL+this.GetPOSURl);
    return this.http.get<PurchaseOrderModel[]>(this.URL+this.GetPOSURl);
  }

  GetParties():Observable<Party[]>
  {
    return this.http.get<Party[]>(this.URL+this.GetPartiesURL)
  }
  GetParty(id):Observable<Party>
  {
    return this.http.get<Party>(this.URL+this.GetPartyURL+id)
  }
  GetById(id : any) : Observable<PurchaseOrderModel>
  {
    return this.http.get<PurchaseOrderModel>(this.URL+this.GetPOSURl).pipe(filter(p=>p.purchaseOrderName == id));
  }
  GetDashBoard()
  {
    return this.http.get<DashBoardData>(this.URL+this.GetDashBoardURL);
  }

  AadPurchaseOrder()
  {
    var body = {
      PurchaseOrderName : this.AddPurchaseOrderFormModel.value.PurchaseOrderName,
      RequiredDate : this.AddPurchaseOrderFormModel.value.RequiredDate,
      partyId: this.AddPurchaseOrderFormModel.value.partyId,
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
      ITemId :this.AddPOItemFormModel.value.ItemId,
     
      Quantity : parseFloat(this.AddPOItemFormModel.value.quantity),
      Amount :parseFloat( this.AddPOItemFormModel.value.amount),
      PurchaseOrderID : this.AddPOItemFormModel.value.purchaseOrderID,
    };
    console.log(body);
    const data =  JSON.stringify(body);  
    const headers =  {
      headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
    };
  return this.http.post<any>(this.URL+this.AddPOIURl, data,headers);
  }

  AddParty()
  {
   
    var body = {
      PartyName : this.AddPartyFromModel.value.partyName,
      Contact : this.AddPartyFromModel.value.contact,
      Emailid :this.AddPartyFromModel.value.emailid
    };
    console.log(body);
    const data =  JSON.stringify(body);  
    const headers =  {
      headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
    };
  return this.http.post<any>(this.URL+this.AddPartyURL, data,headers);
  }

  PurchaseOrderPay()
  {
    var body = {
      Amount :parseInt(this.PaymentDetails.value.Amount),
      Uid : this.PaymentDetails.value.Uid,
    };
    console.log(body);
    const data =  JSON.stringify(body);  
    const headers =  {
      headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
    };
   return this.http.post<any>(this.URL+this.PurChaseOrderPayURL, data,headers);
  }


  DeletePOOrderItem(POid,POIiD)
  {
   var body = {
     PurhcaseId : POid,
     PurchaseOrderItemID :POIiD,
   };
   const data =  JSON.stringify(body); 
   console.log(data);
   console.log("deleted dtata");
   const headers =  {
    headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
    return this.http.post(this.URL+ this.DeletePOOrderItemURL,data,headers);
  }

  AddITem()
  {
   
    var body = {
     
      ITemName : this.onRegisterItemModel.value.ITemName,
      Code : this.onRegisterItemModel.value.Code,
      Descirption : this.onRegisterItemModel.value.Descirption,
      UoM : this.onRegisterItemModel.value.UoM,
      Stock :parseFloat(this.onRegisterItemModel.value.Stock),
    };
    console.log(body);
    const data =  JSON.stringify(body);  
    const headers =  {
      headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
    };
  return this.http.post<any>(this.URL+this.AddItemURl, data,headers);
  }

  GetItems():Observable<Item[]>
  {
    return this.http.get<Item[]>(this.URL+this.GetITemURl)
  }

}

