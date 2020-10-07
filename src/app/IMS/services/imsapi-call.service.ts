import { APIconstantsService } from './../apiconstants.service';
import { JsonReadServiceService } from './../../services/json-read-service.service';
import { PurchaseOrderItemModel } from './../Models/PurchaseOder';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurchaseOrderModel, PurchaseOrderModels } from '../Models/PurchaseOder';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DashBoardData } from '../Models/DashBoardData';
import { Party } from '../Models/party';

@Injectable({
  providedIn: 'root'
})
export class IMSApiCallService {
    
  private  URL;AddPoURL ;GetPOSURl ;AddPOIURl;DeletePOOrderItemURL;GetDashBoardURL;GetPartiesURL;AddPartyURL;
  GetPartyURL ;PurChaseOrderPayURL: string ="";

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
      ItemName : this.AddPOItemFormModel.value.itemName,
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
     ItemID :POIiD,
   };
   const data =  JSON.stringify(body); 
   const headers =  {
    headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
    return this.http.post(this.URL+ this.DeletePOOrderItemURL,data,headers);
  }

}

