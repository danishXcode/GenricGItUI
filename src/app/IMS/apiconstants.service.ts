import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export  class APIconstantsService {

  public  readonly BasePurchaseOrderURL : string = "https://localhost:44352/";
  
  public readonly GetPurhcaseOrderFileNames : string = "PurchaseOrder/GetFileNames/";
  public readonly UpLoadFile = "PurchaseOrder/upload";
  
 //public  readonly BasePurchaseOrderURL : stri ng = "https://ec2-13-235-81-46.ap-south-1.compute.amazonaws.com/";
  public   AddPurhcaseOrderURL :string = "PurchaseOrder/AddPo"
  public  AddPurhcaseOrderItemURL : string = "PurchaseOrder/AddPOI";
  public  GetPurchaseOrderURL : string = "PurchaseOrder/GetPOS";  
  public  GetPurchaseOrderItemURL : string = "";
  public readonly DeletePOOrderItemURL = "PurchaseOrder/DeletePOI";
  public readonly GetDashBoard = "PurchaseOrder/GetDashBoard";
  public readonly PuchaseOrderPay = "PurchaseOrder/Pay";
  public readonly GetParties = "Party/GetParties";
  public readonly GetParty = "Party/GetParty/";
  public readonly AddParty = "Party/AddParty";


  //--------------------------------------------------------------------------------------------------//

  public readonly GetFinancialDetails = "AccountManager/GetFinancialDetails";
  constructor() { }
}
