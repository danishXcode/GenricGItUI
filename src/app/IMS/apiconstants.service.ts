import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export  class APIconstantsService {

  public  readonly BasePurchaseOrderURL : string = "https://localhost:44352/PurchaseOrder/";
  public   AddPurhcaseOrderURL :string = "AddPo"
  public  AddPurhcaseOrderItemURL : string = "AddPOI";
  public  GetPurchaseOrderURL : string = "GetPOS";  
  public  GetPurchaseOrderItemURL : string = "";
  public readonly DeletePOOrderItemURL = "DeletePOI";
  constructor() { }
}
