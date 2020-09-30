import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export  class APIconstantsService {

  //public  readonly BasePurchaseOrderURL : string = "https://localhost:44352/PurchaseOrder/";
  
  
  public  readonly BasePurchaseOrderURL : string = "https://ec2-13-235-81-46.ap-south-1.compute.amazonaws.com/PurchaseOrder/";
  public   AddPurhcaseOrderURL :string = "AddPo"
  public  AddPurhcaseOrderItemURL : string = "AddPOI";
  public  GetPurchaseOrderURL : string = "GetPOS";  
  public  GetPurchaseOrderItemURL : string = "";
  public readonly DeletePOOrderItemURL = "DeletePOI";
  constructor() { }
}
