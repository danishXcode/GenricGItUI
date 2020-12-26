import { PurchaseOrderItmesItem } from './../purchase-order-itmes/purchase-order-itmes-datasource';
import { Party } from './party';
export class PurchaseOrderModel {
      purchaseOrderID: string;
      purchaseOrderName: string;
      dateLoged: Date;
      items?: PurchaseOrderItemModel[]
      totalAmaount: number;
      pending: number;
      paid: number;
      isComplited: boolean;
      approvedBy?: string;
      requiredDate: string;
      party:Party

}

export class PurchaseOrderModels {
      PurchaseOrderModelList: PurchaseOrderModel[]
}


export class PurchaseOrderItemModel {
      amount:number;
      itemId: string;
      purchaseOrderID: string;
      quantity: number;
      total : number;
      purchaseOrderItemID:string;
      item:Item;

}

export class Item
{  
      iTemId : string;
      iTemName : string;
      code : string;
      descirption : string;
      uoM : string;
      stock : number
}